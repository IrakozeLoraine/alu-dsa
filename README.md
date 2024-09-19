## Unique Integers Processing

This project processes a list of integers from an input file, filters out duplicate integers, and outputs the unique integers in sorted order to a result file. The code is implemented in JavaScript without using standard built-in array and list methods such as sort, reverse, or similar.

### Features

- Reads integers from a text file, ensuring the file contains one integer per line.

- Skips invalid input lines that contain:

  - Multiple integers
  - Non-integer values (letters, punctuation, floating-point numbers, etc.)
  - Empty or whitespace-only lines

- Filters out duplicate integers.
- Implements a custom sorting algorithm (Bubble Sort) to sort the unique integers in ascending order.
- Writes the unique, sorted integers to an output file with one integer per line.

### File Structure

The project is organized in the following way:

```
/dsa/hw01/code/src/UniqueInt.js
/dsa/hw01/sample_inputs/sample_input_01.txt
/dsa/hw01/sample_results/sample_input_01.txt_results.txt
```

- `UniqueInt.js`: The main source file that contains the logic to process the input and output files.
- `sample_inputs`: Contains sample input files with integers to be processed.
- `sample_results`: Contains the results of processing the sample input files.

### Getting Started

#### Prerequisites

Ensure you have Node.js installed on your system. If Node.js is not installed, you can download and install it from [nodejs.org](https://arc.net/l/quote/ozagmsop).

#### Running the Program

1. Clone this repository or download the source files.
2. Open a terminal or command prompt in the directory where the UniqueInt.js file is located.
3. Run the program with the following command, specifying the input and output file paths:

`node /dsa/hw01/code/src/UniqueInt.js <inputFilePath> <outputFilePath>`

- `<inputFilePath>`: The path to the input file containing integers (one per line).
- `<outputFilePath>`: The path to the output file where the sorted unique integers will be written.

For example:
`node /dsa/hw01/code/src/UniqueInt.js /dsa/hw01/sample_inputs/sample_input_01.txt /dsa/hw01/sample_results/sample_input_01.txt_results.txt`
