const fs = require('fs');
const { execSync } = require('child_process');
const { join } = require('path');

const currentDir = process.cwd();

// Установите зависимости в текущей папке
try {
  execSync('npm install', { cwd: currentDir, stdio: 'inherit' });
  console.log('npm install in the current directory done.');
} catch (error) {
  console.error(`npm install in the current directory failed: ${error.message}`);
}

const subdirectories = fs.readdirSync(currentDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

subdirectories.forEach((subdirectory) => {
  const projectPath = join(currentDir, subdirectory);
  
  try {
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
    console.log(`npm install in ${subdirectory} done.`);
  } catch (error) {
    console.error(`npm install in ${subdirectory} failed: ${error.message}`);
  }
});