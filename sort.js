const fs = require('fs');

const readme = fs.readFileSync('README.md', 'utf8');
const lines = readme.split('\n');

let output = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^###\s*\[[^\]]+\]\([^)]+\)$/)) {
        output.push(lines[i]);
        output.push('');
        let list = [];
        i += 2;
        for (; lines[i].startsWith('- '); i++) {
            list.push(lines[i]);
        }
        // Sort by matching the name in square brackets
        output.push.apply(output, list.sort((a, b) => {
            const name1 = a.match(/\[(.+?)\]/)[1];
            const name2 = b.match(/\[(.+?)\]/)[1];
            return name1.localeCompare(name2);
        }));
        output.push('');
    } else {
        output.push(lines[i]);
    }
}

fs.writeFileSync('README.md', output.join('\n'));