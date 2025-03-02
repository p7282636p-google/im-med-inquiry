const express = require('express');
const router = express.Router();
const { SimpleDirectoryReader } = require('llama_index.core');
const { HuggingFaceEmbedding } = require('llama_index.embeddings.huggingface');
const { Settings, VectorStoreIndex } = require('llama_index.core');
const { Ollama } = require('llama_index.llms.ollama');
const { PromptTemplate } = require('llama_index.prompts');

router.post('/processRAG', (req, res) => {
    const content = req.body.content;
    // Process the content using the double-layered agent system
    const agent1Result = agent1(content);
    const agent2Result = agent2(agent1Result);
    const finalResult = agent3(agent2Result);
    res.json({ result: finalResult });
});

function agent1(content) {
    // Perform script generation
    // ...implementation...
    return generatedScript;
}

function agent2(script) {
    // Perform searching
    // ...implementation...
    return searchResults;
}

function agent3(results) {
    // Integrate and summarize
    const input_dir_path = 'path/to/your/input/dir';
    const loader = new SimpleDirectoryReader({
        input_dir: input_dir_path,
        required_exts: [".pdf"],
        recursive: true
    });
    const docs = loader.load_data();

    const embed_model = new HuggingFaceEmbedding({
        model_name: "BAAI/bge-large-en-v1.5",
        trust_remote_code: true
    });

    Settings.embed_model = embed_model;
    const index = VectorStoreIndex.from_documents(docs);

    const llm = new Ollama({
        model: "llama3",
        request_timeout: 120.0
    });

    Settings.llm = llm;
    const query_engine = index.as_query_engine({
        streaming: true,
        similarity_top_k: 4
    });

    const qa_prompt_tmpl_str = (
        "Context information is below.\n" +
        "---------------------\n" +
        "{context_str}\n" +
        "---------------------\n" +
        "Given the context information above I want you to think step by step to answer the query in a crisp manner, incase case you don't know the answer say 'I don't know!'.\n" +
        "Query: {query_str}\n" +
        "Answer: "
    );

    const qa_prompt_tmpl = new PromptTemplate(qa_prompt_tmpl_str);
    query_engine.update_prompts({
        "response_synthesizer:text_qa_template": qa_prompt_tmpl
    });

    const response = query_engine.query('What exactly is DSPy?');
    console.log(response);

    return response;
}

module.exports = router;
