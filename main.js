// Import Noir compiler from the web build using relative path
import { compile } from './node_modules/@noir-lang/noir_wasm/dist/web/main.mjs';

const output = document.getElementById('output');
const codeBox = document.getElementById('code');

window.compile = async () => {
    output.textContent = 'Compiling...';
    try {
        const circuit = await compile(codeBox.value);
        output.innerHTML = '<span class="success">✓ Circuit compiled successfully!</span>\n\n';
        output.innerHTML += 'Bytecode size: ' + JSON.stringify(circuit).length + ' bytes';
    } catch (e) {
        output.innerHTML = '<span class="error">✗ Compilation Error:</span>\n' + e.message;
    }
};

window.runTest = () => {
    output.innerHTML = '<span class="info">Tests coming in v2</span>';
};

