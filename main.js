import { compile } from '@noir-lang/noir_wasm';
import { Noir } from '@noir-lang/noir_js';

const output = document.getElementById('output');
const codeBox = document.getElementById('code');

window.compile = async () => {
    output.textContent = 'Compiling...';
    try {
        const circuit = await compile(codeBox.value);
        output.innerHTML = '<span class="success">✓ Circuit compiled successfully!</span>\n\n';
        output.innerHTML += 'Bytecode size: ' + JSON.stringify(circuit).length + ' bytes\n';
        output.innerHTML += '\nNext: Generate proof (coming in v2)';
    } catch (e) {
        output.innerHTML = '<span class="error">✗ Compilation Error:</span>\n' + e.message;
    }
};

