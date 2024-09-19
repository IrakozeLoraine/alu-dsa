const fs = require('fs');

class UniqueInt {
  constructor() {
    // Store unique integers
    this.unique = {};
  }

  // Function to read the next valid integer from the file
  readNextItemFromFile(line) {
    // Trim and handle empty or multiple integers
    line = line.trim();
    const parts = line.split(/\s+/);

    // Skip lines with more than one integer
    if (parts.length !== 1) return null;

    const number = parseInt(parts[0], 10);

    // Skip invalid (non-integer) input
    if (isNaN(number)) return null;
    return number;
  }

  // Process the file and write sorted unique integers to output file
  processFile(inputFilePath, outputFilePath) {
    try {
      // Read input file
      const inputFile = fs.readFileSync(inputFilePath, 'utf8');
      const lines = inputFile.split('\n');

      for (let line of lines) {
        const number = this.readNextItemFromFile(line);
        if (number !== null && !(number in this.unique)) {
          // Store the unique number
          this.unique[number] = true;
        }
      }

      // Convert the object keys to an array of numbers
      const uniqueNumbers = Object.keys(this.unique).map(Number);

      // Sort the unique numbers using bubble sorting algorithm
      this.bubbleSort(uniqueNumbers);

      // Write the sorted numbers to the output file
      const outputData = uniqueNumbers.join('\n') + '\n';
      fs.writeFileSync(outputFilePath, outputData);
      console.log(`Processed successfully. Output saved to: ${outputFilePath}`);
    } catch (error) {
      console.error(`Error processing file: ${error.message}`);
    }
  }

  // Implement a bubble sort algorithm
  bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}

// Ensure the program accepts command-line arguments
if (process.argv.length < 4) {
  console.log('Usage: node UniqueInt.js <inputFilePath> <outputFilePath>');
  // example usage
  console.log(
    'Example: node dsa/hw01/code/src/UniqueInt.js dsa/hw01/sample_inputs/small_sample_input_04.txt dsa/hw01/sample_results/small_sample_input_04_results.txt'
  );
  process.exit(1);
}

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

const uniqueIntProcessor = new UniqueInt();
uniqueIntProcessor.processFile(inputFilePath, outputFilePath);
