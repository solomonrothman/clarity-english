# Clarity English
A simplified, logical, and consistent subset of English designed for unambiguous communication with humans and AI, with a parser implementation in Python.

## Introduction
Clarity English is a novel, syntactically simple, and consistent subset of English. It is designed to eliminate ambiguity and redundancy, making it ideal for clear communication between humans, as well as between humans and AI systems. This repository contains the specification for Clarity English, a growing lexicon in a unified JSON file, and a parser implementation in Python.

The Book and Project Context
This open-source project is the official implementation of the language detailed in the book "Clarity English: A Language for a Clearer Future." The book provides the complete grammar, style guide, hierarchical dictionary, and the full philosophy behind the language.

To fully understand the "why" behind Clarity English, you can read the introductory articles on Medium:

Article 1: [It’s Time to Fix Our Language. My New Book Shows How.](https://medium.com/@sol-roth/its-time-to-fix-our-language-my-new-book-shows-how-2c8804b5c641)

Article 2: [Learn the Basics of a New Language in 10 Minutes. Seriously.](https://medium.com/@sol-roth/learn-the-basics-of-a-new-language-in-10-minutes-seriously-06bc10d7983c)

The book is available on Amazon and is free on Kindle Unlimited:

Get the Book: [Clarity English: A Language for a Clearer Future](https://www.amazon.com/dp/B0FGXHBTTB/)

## Goals of Clarity English
* Unambiguous Communication: Every sentence has a single, clear interpretation.

* Consistency: No exceptions to grammatical rules.

* Learnability: Easy to learn due to its simplified and regular structure.

* Machine Parsability: Designed to be easily processed by computers, facilitating AI interaction and clear instructions.

* Reduced Redundancy: Eliminates synonyms, relying on a core vocabulary expanded by logical modifiers.

* Logical Structure: Follows a consistent Subject-Verb-Object order and uses a hierarchical lexicon to define word relationships.

## Key Features

* **Regularized Grammar:**
    * All verbs follow consistent tense formation (e.g., `walk-d` for past, `walk-will` for future).
    * Nouns have regular plurals (e.g., `cat-s`).
    * Articles (`a`, `an`, `the`) and "be" verbs (`is`, `am`, `are`) are eliminated for directness.
* **Simple Modifier System:**
    * Modifiers (adjectives/adverbs) always precede the word they describe (e.g., `big red ball`).
* **Hierarchical Lexicon:**
    * The vocabulary is organized in a logical tree to show relationships and provide semantic context (e.g., `Thing -> Life -> Animal -> Mammal -> Dog`).
* **Unified JSON Lexicon:**
    * The entire core vocabulary is stored in a single, easy-to-manage `lexicon.json` file, which serves as the "single source of truth" for the parser.

## Repository Structure
clarity-english/
├── clarity_parser.py     # The primary Python parser
├── lexicon.json          # The unified, hierarchical dictionary
├── README.md             # This file
└── LICENSE               # The open-source license for the project

## How to Use the Parser

The `clarity_parser.py` script is designed to be straightforward to use.

#### Prerequisites

* Python 3.x

#### Running the Script

Navigate to the root directory of the project and execute the script from your terminal:

```sh
python clarity_parser.py

The script contains a set of test sentences at the bottom. It will parse each sentence and print the identified Subject, Verb, and Object structure, including any modifiers.

Example Usage in Your Own Project:
Python

from clarity_parser import ClarityParser

# Initialize the parser (it will load lexicon.json automatically)
parser = ClarityParser()

sentence = "Big brown dog chase-d small cat."
parsed_structure = parser.parse(sentence)

# Print the full parsed structure
print(parsed_structure)
```

## Contributing
Contributions to Clarity English are welcome! This is an open-source project, and community involvement is key to its growth and success. Here are some ways you can contribute:

Expand the Lexicon: Add new words and refine existing entries in the lexicon.json file.

Improve the Parser: Enhance the parsing logic, add more advanced error handling, and improve efficiency.

Develop Test Cases: Create a comprehensive suite of test sentences to ensure the parser's accuracy against all rules.

Implement in Other Languages: Create parsers for other programming languages (e.g., JavaScript, Go, Rust).

Develop Applications: Build applications that utilize Clarity English for various purposes (e.g., AI interaction, educational tools, documentation generators).

To contribute, please fork the repository, make your changes in a separate branch, and submit a pull request with a clear description of your improvements.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute it for any purpose, including commercial projects.

Contact
Sol Roth - solroth+clarity@solrothmedia.com

 www.SolRoth.com