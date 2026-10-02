# INT108: Python Programming & Problem Solving
## 100-Percentile Comprehensive Master Study Guide, Visual Flowcharts, Lab Practicals & Resource Dossier
**Author / Lead Student:** Saikat Koner (Black Hat Coders 108)
**Target:** 100/100 Marks | Grade 'O' | 100th Percentile
**Course Code:** INT108 | L:3 T:0 P:2 Credits:4

---

## 📑 Table of Contents
1. [Gold-Standard Textbooks & Deep Chapter Context](#textbooks)
2. [Curated YouTube Video Channels & Direct Practical Links](#videos)
3. [Unit-by-Unit "What to Study, Where to Study & How to Study" Matrix](#study-matrix)
4. [Unit I: Python Environment, PVM Internals, Memory Model & Operators](#unit-i)
5. [Unit II: Conditionals, Loops, Loop-Else Invariants & Randomization](#unit-ii)
6. [Unit III: Sequences, Data Structures, Hash Tables & Sparse Matrices](#unit-iii)
7. [Unit IV: Functions, Parameter Mechanics, Closures, Decorators & Recursion](#unit-iv)
8. [Unit V: Object-Oriented Programming, C3 MRO, Dunder Methods & Memory Optimization](#unit-v)
9. [Unit VI: File I/O Internals, Serialization (Pickling), Exceptions & Regular Expressions](#unit-vi)
10. [Complete 15 Laboratory Practicals (Full Code, Explanations & Outputs)](#practicals)
11. [Step-by-Step Worked Problems & Memory Logic Traces](#worked-problems)
12. [Top 75 High-Frequency Exam & Master Viva Voce Questions](#viva-voce)
13. [100-Percentile 4-Tier Exam Scoring Strategy](#exam-strategy)

---

<a name="textbooks"></a>
## 📚 1. Gold-Standard Textbooks & Deep-Dive Chapter Context

| Unit | Subject Area | Recommended Standard Textbook | Chapters, Core Main Concepts & Key Exam Takeaways |
| :--- | :--- | :--- | :--- |
| **Unit I & II** | **Python Fundamentals, Flow Control & Logic** | *Fundamentals of Python – First Programs* (2nd Ed) — **Kenneth A. Lambert** (Cengage Learning) | • **Ch 1 & 2 (Environment, Types & Expressions):** Python Virtual Machine (PVM) compilation model, bytecode `.pyc`, dynamic typing, variable naming rules (PEP 8), keywords (`import keyword; keyword.kwlist`), arbitrary-precision integers (Bignum representation), floating-point IEEE 754 precision, integer division `//` vs true division `/`, modulus `%`, precedence order (PEMDAS: `**` > unary > `* / // %` > `+ -` > comparisons > `not` > `and` > `or`). Note: Exponentiation `**` is right-to-left associative (`2**3**2 = 512`).<br>• **Ch 3 (Control Statements & Loops):** Boolean expressions, short-circuit evaluation, two-way `if-else`, multi-way `if-elif-else`, nested conditionals, `while` loop invariant, `for` loop with `range(start, stop, step)`, loop control statements (`break`, `continue`, `pass`), `else` block with `while`/`for` loops (executes only on natural termination without `break`), random number generation via `random.randint()`, `random.random()`, `random.choice()`. |
| **Unit III** | **Sequences, Data Structures & Hash Maps** | *Python Programming: Using Problem Solving Approach* — **Reema Thareja** (Oxford University Press) | • **Ch 5 & 6 (Strings, Lists & Tuples):** String immutability, PEP 393 flexible string representation (Latin-1 1-byte, UCS-2 2-byte, UCS-4 4-byte), index range `[-len, len-1]`, slicing `s[start:stop:step]`, step reversal `s[::-1]`, string methods (`.find()`, `.replace()`, `.split()`, `.join()`, `.strip()`, `.format()`, f-strings). List mutability, dynamic array overallocation formula, in-place methods (`.append()`, `.extend()`, `.insert()`, `.pop()`, `.remove()`, `.sort()`), list comprehensions `[x**2 for x in seq if cond]`, shallow vs deep copy (`copy.copy()` vs `copy.deepcopy()`). Tuple immutability, packing/unpacking, singleton tuple `(x,)`, tuples as dictionary keys.<br>• **Ch 7 (Dictionaries & Sparse Matrices):** Key-value hashing, compact hash table design (PEP 468/519), $O(1)$ average lookup, `.keys()`, `.values()`, `.items()`, `.get(key, default)`, `.setdefault()`, dictionary comprehensions, sparse matrix representation using coordinate tuple keys `{(row, col): value}` for memory efficiency. |
| **Unit IV & V** | **Modular Functions, Recursion & OOP** | *Python Programming: Using Problem Solving Approach* — **Reema Thareja** / *Lambert* | • **Ch 8 (Functions & Recursion):** "Pass-by-Object-Reference" (Call-by-Sharing) calling convention, LEGB Rule (Local $\to$ Enclosing $\to$ Global $\to$ Built-in), `global` and `nonlocal` keywords, positional vs keyword arguments, default arguments trap (never use mutable default arguments `def f(a=[])`), variable-length arguments `*args` (tuple) and `**kwargs` (dict), closures, decorators (`@functools.wraps`), recursive call stack, base conditions, recursion limit (`sys.getrecursionlimit()`).<br>• **Ch 10 & 11 (OOP Paradigm):** Class definition, instance attributes, `__init__` constructor, `self` reference, public vs private attributes (Name Mangling `_Class__private`), Single, Multiple, Multilevel, Hierarchical inheritance, Method Overriding, `super().__init__()`, Method Resolution Order (MRO / C3 Linearization), Operator Overloading via dunder methods (`__str__`, `__repr__`, `__add__`, `__len__`, `__eq__`), `__slots__` memory optimization. |
| **Unit VI** | **File I/O, Pickling, Exceptions & Regex** | *Fundamentals of Python* — **Kenneth A. Lambert** / *Python Docs* | • **Ch 9 (Files & Serialization):** File modes (`r`, `w`, `a`, `r+`, `w+`, `rb`, `wb`), context managers (`with open() as f:` guarantees deterministic cleanup via `__enter__` and `__exit__`), `.read()`, `.readline()`, `.readlines()`, `.seek(offset, whence)`, `.tell()`, Object Pickling & Unpickling (`pickle.dump()`, `pickle.load()`), Security hazard of untrusted pickling (`__reduce__` exploit vector).<br>• **Ch 9 & Regex (Exceptions & Pattern Matching):** Exception hierarchy (`BaseException` $\to$ `Exception`), `try-except-else-finally` lifecycle, custom exceptions (`class CustomError(Exception)`), `re` module tokens (`\d`, `\w`, `\s`, `^`, `$`, `+`, `*`, `?`, `{m,n}`, `[]`, `()`), functions `re.match()`, `re.search()`, `re.findall()`, `re.finditer()`, `re.sub()`, web scraping & text parsing. |

---

<a name="videos"></a>
## 📺 2. Curated YouTube Video Channels & Direct Practical Links

| Unit / Practical Area | Recommended Channel | Direct YouTube Search Query / Reference | Core Practical Takeaway & Exam Scoring Trigger |
| :--- | :--- | :--- | :--- |
| **Unit I & II: Python Setup & Flow Control** | **Corey Schafer** / **Telusko** | [Corey Schafer Python Programming Tutorial](https://www.youtube.com/results?search_query=Corey+Schafer+Python+Tutorial+Beginners) | Python environment setup, PVM model, conditionals, `while`/`for` loops, loop `else` clauses. |
| **Unit III: Strings, Lists, Tuples & Dicts** | **Corey Schafer** / **Chai aur Code** | [Corey Schafer Python Lists Tuples and Dictionaries](https://www.youtube.com/results?search_query=Corey+Schafer+Python+Lists+Tuples+and+Dictionaries) | Slicing tricks, list comprehensions, dictionary hashing, and shallow vs deep copying. |
| **Unit IV: Functions, LEGB Scope & Recursion** | **Telusko (Navin Reddy)** | [Telusko Python Functions and Recursion](https://www.youtube.com/results?search_query=Telusko+Python+Functions+Arguments+Recursion) | `*args`, `**kwargs`, LEGB variable scoping, closures, decorators, and call stack visualization for recursive algorithms. |
| **Unit V: Object-Oriented Programming (OOP)** | **Corey Schafer** / **FreeCodeCamp** | [Corey Schafer Python OOP Tutorials](https://www.youtube.com/results?search_query=Corey+Schafer+Python+OOP+Tutorials) | Classes, instances, inheritance, method overriding, `super()`, MRO C3 linearization, and magic/dunder methods. |
| **Unit VI: File Handling & Object Pickling** | **Telusko** / **Corey Schafer** | [Corey Schafer Python File Objects Reading and Writing](https://www.youtube.com/results?search_query=Corey+Schafer+Python+File+Objects+Reading+Writing) | `with open()` context managers, binary files, serialization using `pickle.dump()` and `pickle.load()`. |
| **Unit VI: Exception Handling & Regex** | **Corey Schafer** / **Tech With Tim** | [Corey Schafer Python Regular Expressions Regex](https://www.youtube.com/results?search_query=Corey+Schafer+Python+Regular+Expressions) | `try-except-else-finally` execution blocks, regex tokenization, pattern extraction with `re.findall()`. |
| **Complete 15 Lab Practicals Walkthrough** | **Gate Smashers** / **Jenny's Lectures** | [Python Programming Lab Practicals Gate Smashers](https://www.youtube.com/results?search_query=Python+Programming+Lab+Practicals+Gate+Smashers) | Step-by-step code demonstrations of all 15 university practical lab programs. |
| **Master Viva Voce Preparation** | **Gate Smashers** / **Knowledge Gate** | [Python Programming Viva Voce Questions Gate Smashers](https://www.youtube.com/results?search_query=Python+Programming+Viva+Voce+Questions+Gate+Smashers) | Top 75 external examiner interview questions, tricky syntax pitfalls, and output predictions. |

---

<a name="study-matrix"></a>
## 🗺️ 3. Unit-by-Unit "What to Study, Where to Study & How to Study" Matrix

```
========================================================================================================================
UNIT / MODULE        | WHAT TO STUDY (CORE CONCEPTS)        | WHERE TO STUDY (TEXTBOOK/SOURCE)  | HOW TO STUDY (STRATEGY)
========================================================================================================================
Unit I: Python Env,  | • PVM Compilation & Bytecode (.pyc) | Lambert: Ch 1 & 2                 | 1. Memorize 35 Python keywords
Variables & Expr     | • Data Types, Precision & PEMDAS     | Thareja: Ch 1, 2 & 3              | 2. Master // vs / division rules
                     | • Variable Naming Rules & Operators  | Corey Schafer Python Setup        | 3. Practice expression evaluation
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit II: Conditionals| • if-elif-else & Short-Circuiting    | Lambert: Ch 3                     | 1. Trace nested if & short-circuit logic
& Iteration Loops    | • while & for Loops with range()     | Thareja: Ch 4                     | 2. Understand loop 'else' condition
                     | • break, continue, pass & random     | Telusko Python Loops              | 3. Implement Perfect & Armstrong nums
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit III: Sequences, | • String Slicing [start:stop:step]   | Thareja: Ch 5, 6 & 7              | 1. Master s[::-1] reversal and methods
Lists, Tuples, Dicts | • List Mutability, Methods & Comp.   | Lambert: Ch 4 & 5                 | 2. Differentiate shallow vs deep copy
                     | • Tuples & Dict Hashing, Sparse Mat  | Corey Schafer Python Data Structs | 3. Solve Sparse Matrix coordinate map
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit IV: Functions   | • LEGB Scoping (global vs nonlocal)  | Thareja: Ch 8                     | 1. Draw recursion call stack trees
& Recursion          | • *args, **kwargs & Default Arg Trap | Lambert: Ch 6                     | 2. Explain mutable default arg bug
                     | • Recursive Base vs Recursive Case   | Telusko Functions & Recursion     | 3. Implement recursive Factorial/Fib
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit V: Object       | • Classes, Instances, __init__, self | Thareja: Ch 10 & 11               | 1. Draw class inheritance diagrams
Oriented Programming | • Inheritance, Overriding & super()  | Corey Schafer Python OOP          | 2. Trace Name Mangling (_Class__priv)
(OOP)                | • Name Mangling & Dunder Overloading | FreeCodeCamp OOP Masterclass      | 3. Overload __str__, __add__, __len__
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit VI: File I/O,   | • Text/Binary Files & Context Mgrs   | Lambert: Ch 9                     | 1. Write clean 'with open()' scripts
Pickle, Exceptions,  | • Pickling (pickle.dump / load)      | Thareja: Ch 9 & 12                | 2. Map try-except-else-finally flow
Regular Expressions  | • try-except-else-finally & Regex    | Corey Schafer Regex & Files       | 3. Practice re.findall() web scraping
========================================================================================================================
```

---

<a name="unit-i"></a>
## ⚙️ 4. Unit I: Python Environment, PVM Internals, Memory Model & Operators

### 4.1 CPython Compilation Pipeline & PVM Architecture
Unlike purely compiled languages (C/C++) or purely interpreted shells (Bash), Python utilizes a two-stage execution architecture:
1. **Lexing & Parsing:** Source `.py` text is tokenized and transformed into a Concrete Syntax Tree (CST), then compiled into an Abstract Syntax Tree (AST).
2. **Bytecode Compilation:** The AST is compiled into platform-independent bytecode instructions (`.pyc` cached in `__pycache__`).
3. **PVM Evaluation Loop:** The **Python Virtual Machine (PVM)** (`ceval.c` in CPython) executes the bytecode stack-based instructions on native CPU hardware.

```
+---------------------------------------------------------------------------------------------------+
|                              PYTHON EXECUTION PIPELINE (SOURCE TO PVM)                            |
+---------------------------------------------------------------------------------------------------+

   +-------------------+        +----------------------+        +-------------------------------+
   |   Source Code     |  CPython Compilation          |  Bytecode File |                               |
   |   script.py       | ─────────────────────────────►|  script.pyc   |                               |
   |  (Human Readable) |       | (Syntax / Tokens)    |  (__pycache__) |                               |
   +-------------------+        +----------------------+        +---------------+---------------+
                                                                                |
                                                                                ▼
                                                                +-------------------------------+
                                                                | Python Virtual Machine (PVM)  |
                                                                | • Bytecode Interpretation     |
                                                                | • Memory Allocation / Heap    |
                                                                | • Reference Counting GC       |
                                                                +---------------+---------------+
                                                                                |
                                                                                ▼
                                                                +-------------------------------+
                                                                | Native Machine Execution      |
                                                                | CPU Instructions / Output     |
                                                                +-------------------------------+
```

### 4.2 CPython Memory Model: Reference Counting & Cyclic GC
* **Variables as Name Tags:** In Python, variables are not typed memory locations. They are untyped reference pointers bound to strongly typed heap objects.
* **Reference Counting:** Every Python object contains an internal header (`PyObject`) with `ob_refcnt` (reference count) and `ob_type` (pointer to type descriptor). When `ob_refcnt == 0`, memory is deallocated instantly.
* **Generational Cyclic Garbage Collector:** Detects circular reference graphs (e.g., `a.obj = b; b.obj = a`) using 3 generational buckets (Gen 0, Gen 1, Gen 2).
* **Global Interpreter Lock (GIL):** A mutex lock in CPython ensuring only one native thread executes Python bytecode at a time, safeguarding thread-unsafe reference counting. CPU-bound concurrency is scaled via `multiprocessing`.

### 4.3 Small Integer Caching & String Interning
* **Small Integer Pool:** CPython pre-allocates integers in the range `[-5, 256]`. Reassigning numbers in this range reuses the identical memory address:
  ```python
  x = 100; y = 100; print(x is y) # True (Shared cached object)
  a = 1000; b = 1000; print(a is b) # False (Distinct heap allocations)
  ```
* **String Interning:** Python automatically interns compile-time constant strings matching identifier patterns to optimize dictionary lookups via pointer comparison ($O(1)$) rather than character-by-character comparison ($O(n)$).

### 4.4 Complete Operator Precedence Table (PEMDAS / BMODS)
```
+---------------------------------------------------------------------------------------------------+
| Level | Operators                            | Associativity   | Description                      |
+-------+--------------------------------------+-----------------+----------------------------------+
| 1     | () [] {}                             | Left to Right   | Grouping, Indexing, Calling      |
| 2     | **                                   | RIGHT to Left   | Exponentiation (2**3**2 = 512!)  |
| 3     | +x, -x, ~x                           | Right to Left   | Unary Positive, Negative, Bitwise|
| 4     | *, /, //, %                          | Left to Right   | Multiplication, Divisions, Modulo|
| 5     | +, -                                 | Left to Right   | Addition, Subtraction            |
| 6     | <<, >>                               | Left to Right   | Bitwise Shift                    |
| 7     | &                                    | Left to Right   | Bitwise AND                      |
| 8     | ^                                    | Left to Right   | Bitwise XOR                      |
| 9     | |                                    | Left to Right   | Bitwise OR                       |
| 10    | ==, !=, >, <, >=, <=, is, is not, in | Left to Right   | Comparisons & Membership         |
| 11    | not                                  | Right to Left   | Logical NOT                      |
| 12    | and                                  | Left to Right   | Logical AND (Short-Circuit)      |
| 13    | or                                   | Left to Right   | Logical OR (Short-Circuit)       |
+---------------------------------------------------------------------------------------------------+
```

---

<a name="unit-ii"></a>
## 🔀 5. Unit II: Conditionals, Loops, Loop-Else Invariants & Randomization

### 5.1 Truth Value Testing (Truthy vs Falsy Invariants)
In Python, all objects evaluate to a boolean value in conditional contexts.
| Falsy Objects (Evaluate to `False`) | Truthy Objects (Evaluate to `True`) |
| :--- | :--- |
| `None`, `False` | `True` |
| Zero numbers: `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)` | Any non-zero number: `1`, `-42`, `3.14` |
| Empty collections: `""`, `()`, `[]`, `{}`, `set()`, `range(0)` | Any non-empty collection: `[0]`, `" "`, `(False,)` |
| Custom objects returning `0` or `False` from `__bool__()` or `__len__()` | Standard object instances |

### 5.2 Short-Circuit Evaluation Semantics
* `A and B`: Evaluates `A`. If `A` is falsy, returns `A` immediately without touching `B`. If `A` is truthy, evaluates and returns `B`.
* `A or B`: Evaluates `A`. If `A` is truthy, returns `A` immediately without touching `B`. If `A` is falsy, evaluates and returns `B`.
* **Idiomatic Default Assignment:** `username = user_input or "Guest"` (assigns `"Guest"` if `user_input` is empty `""`).

### 5.3 Formal Loop `else` Clause Execution Invariant
In Python, both `for` and `while` loops possess an optional `else:` block. The `else:` block executes **if and only if the loop terminates normally** (exhausts all iterable elements or condition becomes `False`) without executing a `break` statement.

```
                           LOOP WITH 'ELSE' EXECUTION FLOW
                                         │
                                  [ LOOP CONDITION ]
                                         │
                     ┌───────────────────┴───────────────────┐
                  (True)                                  (False)
                     ▼                                       ▼
             [ LOOP BODY EXEC ]                    [ LOOP 'ELSE' BLOCK ]
                     │                             (Executes only on clean
              [ HIT BREAK? ]                        loop completion!)
          ┌──────────┴──────────┐                            │
        (Yes)                  (No)                          ▼
          ▼                     │                      [ END OF LOOP ]
   [ EXIT LOOP ]                │
 (Skip 'else' block!)           └────────► [ NEXT ITERATION ]
```

---

<a name="unit-iii"></a>
## 📦 6. Unit III: Sequences, Data Structures, Hash Tables & Sparse Matrices

### 6.1 Data Structure Characteristic Matrix
| Data Structure | Syntax | Mutable? | Ordered? | Indexable? | Allows Duplicates? | Internal Implementation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **String (`str`)** | `'hello'`, `"text"` | ❌ No | ✅ Yes | ✅ Yes (`s[0]`) | ✅ Yes | Contiguous Unicode array (PEP 393) |
| **List (`list`)** | `[1, 2, 'a']` | ✅ **Yes** | ✅ Yes | ✅ Yes (`L[i]`) | ✅ Yes | Dynamic array of pointers |
| **Tuple (`tuple`)** | `(1, 2, 'a')`, `(x,)` | ❌ **No** | ✅ Yes | ✅ Yes (`T[i]`) | ✅ Yes | Fixed-size array of pointers |
| **Dictionary (`dict`)** | `{'k': 'v'}` | ✅ **Yes** | ✅ Yes (3.7+) | ❌ By Key | Keys: ❌ No, Vals: ✅ Yes | Compact Hash Table with open addressing |
| **Set (`set`)** | `{1, 2, 3}` | ✅ **Yes** | ❌ No | ❌ No | ❌ **No** | Hash Table (keys only) |

### 6.2 String Slicing Mathematics & PEP 393 Memory Model
* General syntax: `sequence[start : stop : step]`
  * Positive step ($k > 0$): Starts at `start`, steps forward up to `stop - 1`.
  * Negative step ($k < 0$): Starts at `start`, steps backward down to `stop + 1`.
  * **String Reversal:** `s[::-1]` creates a reversed copy in $O(n)$ time.
* **PEP 393 Flexible String Representation:** Python uses 1 byte per character for ASCII/Latin-1 (`1-255`), 2 bytes for UCS-2 (up to `\uFFFF`), and 4 bytes for UCS-4/emojis (up to `\U0010FFFF`), maximizing memory conservation.

### 6.3 List Dynamic Array Overallocation Formula
When appending to a list, CPython over-allocates memory slots to ensure amortized $O(1)$ append time complexity.
$$\text{Allocated Slots} = n + (n \gg 3) + (n < 9 ? 3 : 6)$$
* *Resizing progression:* $0, 4, 8, 16, 24, 32, 40, 52, 64, \dots$
* `list.append(x)` is $O(1)$ amortized; `list.insert(0, x)` and `list.pop(0)` are $O(n)$ because all subsequent elements must be shifted in memory.

### 6.4 Dictionary Internals & Sparse Matrices
* **Compact Hash Table Design:** Since Python 3.6/3.7, dictionaries maintain two arrays: a sparse indices hash table and a dense array of `(hash, key, value)`. This preserves insertion order while guaranteeing $O(1)$ average lookup and cutting memory usage by $40\%$.
* **SipHash Protection:** Python randomizes string hash seeds on process startup to prevent Hash Collision Denial of Service (DoS) attacks.
* **Sparse Matrix Representation:**
  ```python
  # Efficient Coordinate Representation (DOK - Dictionary of Keys)
  sparse_matrix = {
      (0, 5): 18.5,
      (142, 99): 4.2,
      (999, 999): -1.0
  }
  val = sparse_matrix.get((row, col), 0.0) # O(1) retrieval
  ```

---

<a name="unit-iv"></a>
## 🔄 7. Unit IV: Functions, Parameter Mechanics, Closures, Decorators & Recursion

### 7.1 "Pass-by-Object-Reference" (Call-by-Sharing) Calling Convention
In Python, all arguments are passed by object reference:
* If an argument is **immutable** (e.g., `int`, `str`, `tuple`), modifying the variable inside the function rebinds the local name to a new object; the caller's value is unaffected.
* If an argument is **mutable** (e.g., `list`, `dict`), modifying the object in-place (e.g., `lst.append()`) mutates the shared heap object directly visible to the caller!

### 7.2 LEGB Variable Scoping Architecture
```
                         LEGB VARIABLE LOOKUP HIERARCHY

  +-------------------------------------------------------------+
  |  Built-in Scope (B)                                         |
  |  Standard Python built-ins: print(), len(), range(), int()  |
  |                                                             |
  |  +-------------------------------------------------------+  |
  |  |  Global / Module Scope (G)                            |  |
  |  |  Top-level variables declared in the .py module       |  |
  |  |                                                       |  |
  |  |  +-------------------------------------------------+  |  |
  |  |  |  Enclosing / Non-Local Scope (E)                |  |  |
  |  |  |  Variables in outer enclosing def of nested fn  |  |  |
  |  |  |                                                 |  |  |
  |  |  |  +-------------------------------------------+  |  |  |
  |  |  |  |  Local Scope (L)                          |  |  |  |
  |  |  |  |  Variables created inside current function|  |  |  |
  |  |  |  +-------------------------------------------+  |  |  |
  |  |  +-------------------------------------------------+  |  |
  |  +-------------------------------------------------------+  |
  +-------------------------------------------------------------+
```

### 7.3 The Mutable Default Argument Bug (Examiner's Trap)
```python
# ❌ DANGEROUS BUG: Default argument [] is evaluated ONCE at function definition!
def append_to_list(val, target_list=[]):
    target_list.append(val)
    return target_list

print(append_to_list(1)) # [1]
print(append_to_list(2)) # [1, 2] (Shared state persisted!)

# ✅ 100-PERCENTILE PRO FIX:
def append_to_list_safe(val, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(val)
    return target_list
```

### 7.4 Closures & Function Decorators
A closure occurs when an inner nested function retains access to variables from its enclosing scope even after the outer function has finished execution (`fn.__closure__`).
```python
import functools

def execution_logger(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"[LOG] Calling {func.__name__} with args: {args}")
        result = func(*args, **kwargs)
        print(f"[LOG] {func.__name__} returned: {result}")
        return result
    return wrapper

@execution_logger
def add(a, b): return a + b
```

### 7.5 Recursion Call Stack Frame Pipeline
```
Recursion Calculation for factorial(4) = 4 * 3 * 2 * 1 = 24:

  [ STACK FRAME PUSH ]                          [ STACK UNWINDING / RETURN ]
  factorial(4) -> waits for factorial(3)        factorial(4) returns 4 * 6  = 24
    │                                              ▲
    ▼                                              │
  factorial(3) -> waits for factorial(2)        factorial(3) returns 3 * 2  = 6
    │                                              ▲
    ▼                                              │
  factorial(2) -> waits for factorial(1)        factorial(2) returns 2 * 1  = 2
    │                                              ▲
    ▼                                              │
  factorial(1) -> BASE CASE REACHED! ─────────► returns 1
```

---

<a name="unit-v"></a>
## 🏛️ 8. Unit V: Object-Oriented Programming, C3 MRO, Dunder Methods & Memory Optimization

### 8.1 The 4 Pillars of OOP in Python
```
+---------------------------------------------------------------------------------------------------+
|                                 THE 4 PILLARS OF PYTHON OOP                                       |
+---------------------------------------------------------------------------------------------------+

   +--------------------+     +--------------------+     +--------------------+     +---------------+
   |   ENCAPSULATION    |     |    ABSTRACTION     |     |    INHERITANCE     |     | POLYMORPHISM  |
   | Bundling data &    |     | Hiding internal    |     | Reusing base class |     | Single name,  |
   | methods; private   |     | complex logic;     |     | attributes/methods |     | multiple forms|
   | name mangling:     |     | using ABCs & clean |     | via super() and    |     | via overriding|
   | self.__private     |     | public interfaces  |     | MRO linearization  |     | & dunder ops  |
   +--------------------+     +--------------------+     +--------------------+     +---------------+
```

### 8.2 Multiple Inheritance & C3 Linearization Algorithm (MRO)
Python resolves method calls across complex multiple inheritance hierarchies using the **C3 Linearization Algorithm**:
$$L(C) = C + \text{merge}(L(P_1), L(P_2), \dots, P_1 P_2 \dots)$$
* Where $C$ is the class, $P_i$ are parent classes in declaration order, and `merge()` picks the first head class not present in the tail of any other list.
* View any class MRO directly with `Class.mro()` or `Class.__mro__`.

### 8.3 Name Mangling & Private Attributes
Prefixing an instance attribute with double underscores (`__attr`) triggers Python's Name Mangling:
* `self.__balance` $\to$ Transformed internally to `self._Account__balance`.
* Prevents accidental name collisions in child subclasses.

### 8.4 `__slots__` Memory Optimization
By default, Python stores instance attributes in a dynamic dictionary `instance.__dict__`, consuming roughly $150\text{ bytes}$ per object. Declaring `__slots__ = ('name', 'age')` replaces the dictionary with a fixed-size array of pointers, reducing per-object memory overhead to $\approx 48\text{ bytes}$ and accelerating attribute access.

### 8.5 Comprehensive Dunder (Magic) Methods Reference
| Magic Method | Triggers When... | Purpose / Example |
| :--- | :--- | :--- |
| `__new__(cls, ...)` | Object creation | Allocates memory for a new object before `__init__`. Used in Singletons. |
| `__init__(self, ...)` | Instance is instantiated | Constructor: initializes object state and fields. |
| `__str__(self)` | `str(obj)`, `print(obj)` | Returns human-readable string representation. |
| `__repr__(self)` | `repr(obj)`, interactive shell | Returns unambiguous developer-facing code representation. |
| `__len__(self)` | `len(obj)` | Returns collection length (must return non-negative int). |
| `__add__(self, other)`| `obj1 + obj2` | Overloads addition operator `+`. |
| `__eq__(self, other)`| `obj1 == obj2` | Overloads value equality operator `==`. |
| `__getitem__(self, k)`| `obj[k]` | Enables bracket indexing / dictionary lookup. |
| `__enter__`, `__exit__`| `with obj:` | Implements Context Manager protocol for resource management. |

---

<a name="unit-vi"></a>
## 📁 9. Unit VI: File I/O Internals, Serialization (Pickling), Exceptions & Regular Expressions

### 9.1 File Handling Architecture & Context Managers
Using `with open(filename, mode) as f:` implements Python's Context Manager protocol:
1. Calls `f.__enter__()`, returning the file stream object.
2. Executes the enclosed code block.
3. Automatically triggers `f.__exit__()`, guaranteeing file descriptor closure even upon uncaught exceptions or runtime crashes.

### 9.2 Object Pickling & Security Exploit Hazards
* **Pickling (`pickle.dump()`)**: Serializes in-memory Python object graphs into a binary byte stream.
* **Unpickling (`pickle.load()`)**: Reconstructs binary byte stream into Python objects.
* **⚠️ Security Warning:** Never unpickle data from untrusted sources! Malicious payloads can override `__reduce__()` to execute arbitrary remote shell commands (`os.system("rm -rf /")`) during deserialization. Use `json` for untrusted network payloads.

### 9.3 Exception Handling Lifecycle Flowchart
```
                             EXCEPTION HANDLING FLOWCHART
                                         │
                                  [ try: BLOCK ]
                          (Execute risky code statements)
                                         │
                        Did an Exception occur during exec?
                                         │
                     ┌───────────────────┴───────────────────┐
                   (Yes)                                    (No)
                     ▼                                       ▼
            [ except SpecificError: ]                 [ else: BLOCK ]
            (Handle matching exception)         (Runs ONLY if NO error occurred!)
                     │                                       │
                     └───────────────────┬───────────────────┘
                                         ▼
                                 [ finally: BLOCK ]
                       (ALWAYS executes, guaranteed cleanup!)
```

### 9.4 Regular Expression Meta-Characters Reference Table
| Regex Token | Meaning & Matches | Example Pattern & Target Match |
| :--- | :--- | :--- |
| `^` | Start of string | `^Hello` matches `"Hello World"`, not `"Say Hello"` |
| `$` | End of string | `World$` matches `"Hello World"`, not `"World Cup"` |
| `\d` | Any decimal digit `[0-9]` | `\d{3}` matches `"123"` |
| `\D` | Any non-digit character | `\D+` matches `"Python"` |
| `\w` | Any alphanumeric character + `_` | `\w+` matches `"var_name123"` |
| `\s` | Any whitespace (` `, `\t`, `\n`) | `\s+` splits words across spaces |
| `.` | Any character except newline | `a.b` matches `"a1b"`, `"acb"` |
| `*` | 0 or more repetitions (Greedy) | `ab*` matches `"a"`, `"ab"`, `"abbb"` |
| `+` | 1 or more repetitions (Greedy) | `ab+` matches `"ab"`, `"abbb"` (NOT `"a"`) |
| `?` | 0 or 1 repetition (Optional) | `colou?r` matches `"color"` and `"colour"` |
| `*?`, `+?` | Lazy / Non-greedy matching | `<.*?>` matches `<b>` in `<b>text</b>` |
| `(?=...)` | Positive Lookahead | `\d+(?=px)` matches `100` in `100px` |
| `[a-z]` | Character set range | `[0-9a-fA-F]` matches hex digits |
| `(P)` | Capture Group | `(\w+)@(\w+\.com)` captures username and domain |

---

<a name="practicals"></a>
## 🧰 10. Complete 15 University Laboratory Practicals (Full Code, Explanations & Outputs)

### Practical 1: Arithmetic Operations (+, -, *, /, //, %)
```python
# Practical 1: Perform all basic arithmetic operations
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"\n--- Arithmetic Operations between {num1} and {num2} ---")
print(f"Addition (+)        : {num1} + {num2} = {num1 + num2}")
print(f"Subtraction (-)     : {num1} - {num2} = {num1 - num2}")
print(f"Multiplication (*)  : {num1} * {num2} = {num1 * num2}")
if num2 != 0:
    print(f"True Division (/)   : {num1} / {num2} = {num1 / num2}")
    print(f"Floor Division (//) : {num1} // {num2} = {num1 // num2}")
    print(f"Modulus (%)         : {num1} % {num2} = {num1 % num2}")
    print(f"Exponentiation (**) : {num1} ** {num2} = {num1 ** num2}")
else:
    print("[ERROR] Division by zero is undefined!")
```

---

### Practical 2: Perfect Number Checker
```python
# Practical 2: Check whether a number is Perfect or not
n = int(input("Enter positive integer: "))

if n <= 0:
    print("Please enter a positive integer.")
else:
    divisor_sum = 0
    for i in range(1, n // 2 + 1):
        if n % i == 0:
            divisor_sum += i

    if divisor_sum == n:
        print(f"✅ {n} is a PERFECT NUMBER (Sum of proper divisors = {divisor_sum}).")
    else:
        print(f"❌ {n} is NOT a Perfect Number (Sum of proper divisors = {divisor_sum} != {n}).")
```

---

### Practical 3: Armstrong Number Checker
```python
# Practical 3: Check whether a number is Armstrong or not
num = int(input("Enter integer to check: "))
num_str = str(abs(num))
num_digits = len(num_str)

armstrong_sum = sum(int(digit) ** num_digits for digit in num_str)

if armstrong_sum == num:
    print(f"✅ {num} is an ARMSTRONG NUMBER.")
else:
    print(f"❌ {num} is NOT an Armstrong Number (Computed sum = {armstrong_sum}).")
```

---

### Practical 4: Iterative Factorial of a Number
```python
# Practical 4: Compute factorial using an iterative loop
n = int(input("Enter non-negative integer: "))

if n < 0:
    print("[ERROR] Factorial is not defined for negative numbers.")
elif n in (0, 1):
    print(f"{n}! = 1")
else:
    fact = 1
    for i in range(2, n + 1):
        fact *= i
    print(f"✅ {n}! = {fact}")
```

---

### Practical 5: Fibonacci Series Generator
```python
# Practical 5: Generate N terms of Fibonacci Series
n_terms = int(input("Enter number of terms: "))

if n_terms <= 0:
    print("Please enter a positive integer.")
elif n_terms == 1:
    print("Fibonacci Series: [0]")
else:
    fib = [0, 1]
    for _ in range(2, n_terms):
        fib.append(fib[-1] + fib[-2])
    print(f"Fibonacci Series ({n_terms} terms): {fib}")
```

---

### Practical 6: Palindrome String Checker (Using Loops)
```python
# Practical 6: Check if string is a Palindrome using loop
raw_str = input("Enter string: ")
clean_str = raw_str.lower().replace(" ", "")

is_palindrome = True
left = 0
right = len(clean_str) - 1

while left < right:
    if clean_str[left] != clean_str[right]:
        is_palindrome = False
        break
    left += 1
    right -= 1

if is_palindrome:
    print(f"✅ '{raw_str}' is a PALINDROME.")
else:
    print(f"❌ '{raw_str}' is NOT a palindrome.")
```

---

### Practical 7: Recursive Factorial of a Natural Number
```python
# Practical 7: Recursive calculation of factorial
def factorial_recursive(n):
    if n < 0:
        raise ValueError("Factorial undefined for negative integers.")
    if n in (0, 1): # Base Case
        return 1
    return n * factorial_recursive(n - 1) # Recursive Step

num = int(input("Enter natural number: "))
print(f"✅ Recursive Factorial: {num}! = {factorial_recursive(num)}")
```

---

### Practical 8: Read a File Line-by-Line and Print
```python
# Practical 8: Read file line by line with formatting
filename = "sample_data.txt"

with open(filename, "w", encoding="utf-8") as f:
    f.write("Line 1: Python is dynamically typed.\nLine 2: Indentation defines block scope.\nLine 3: Everything in Python is an object.\n")

print(f"--- Reading '{filename}' line by line ---")
with open(filename, "r", encoding="utf-8") as file:
    for line_num, line in enumerate(file, 1):
        print(f"[{line_num}] {line.rstrip()}")
```

---

### Practical 9: Remove Lines Containing 'a' and Write to Another File
```python
# Practical 9: Filter out lines containing 'a' or 'A'
input_file = "source_text.txt"
output_file = "filtered_text.txt"

with open(input_file, "w", encoding="utf-8") as f:
    f.write("Python is great\nC++ is fast\nRuby on Rails\nRust is safe\nGo is concurrent\n")

with open(input_file, "r", encoding="utf-8") as fin, open(output_file, "w", encoding="utf-8") as fout:
    for line in fin:
        if 'a' not in line.lower():
            fout.write(line)

print(f"✅ Filtered lines written to '{output_file}'.")
```

---

### Practical 10: Count Vowels, Consonants, Uppercase & Lowercase in File
```python
# Practical 10: Character frequency analysis in a text file
filename = "source_text.txt"

vowels = set("aeiouAEIOU")
vowel_count = consonant_count = upper_count = lower_count = 0

with open(filename, "r", encoding="utf-8") as f:
    text = f.read()
    for ch in text:
        if ch.isupper():
            upper_count += 1
        elif ch.islower():
            lower_count += 1

        if ch.isalpha():
            if ch in vowels:
                vowel_count += 1
            else:
                consonant_count += 1

print(f"--- Character Analysis for '{filename}' ---")
print(f"Vowels Count     : {vowel_count}")
print(f"Consonants Count : {consonant_count}")
print(f"Uppercase Count  : {upper_count}")
print(f"Lowercase Count  : {lower_count}")
```

---

### Practical 11: Binary File with Name & Roll No (Search via Pickling)
```python
# Practical 11: Binary student database search using pickle
import pickle

records_file = "students.dat"

# 1. Write student records to binary file
students = [
    {"roll": 101, "name": "Saikat Koner", "branch": "CSE"},
    {"roll": 102, "name": "Aman Sharma", "branch": "ECE"},
    {"roll": 103, "name": "Priya Verma", "branch": "IT"}
]

with open(records_file, "wb") as f:
    pickle.dump(students, f)
print("Student records serialized to binary file.")

# 2. Search for a given Roll Number
search_roll = int(input("Enter Roll Number to search: "))
found = False

with open(records_file, "rb") as f:
    loaded_students = pickle.load(f)
    for s in loaded_students:
        if s["roll"] == search_roll:
            print(f"✅ Student Found: Name: {s['name']} | Branch: {s['branch']}")
            found = True
            break

if not found:
    print(f"❌ Student with Roll No {search_roll} NOT found.")
```

---

### Practical 12: Random Number Generator (Dice Simulation 1-6)
```python
# Practical 12: Simulate 6-sided dice rolls
import random

def roll_dice(num_rolls=5):
    print(f"--- Simulating {num_rolls} Dice Rolls (1 to 6) ---")
    for i in range(1, num_rolls + 1):
        outcome = random.randint(1, 6)
        print(f"Roll #{i} -> Outcome: 🎲 {outcome}")

roll_dice(6)
```

---

### Practical 13: Stack Implementation Using List Data Structure
```python
# Practical 13: Stack implementation (LIFO) using Python List
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)
        print(f"Pushed: {item}")

    def pop(self):
        if self.is_empty():
            print("[ERROR] Stack Underflow! Cannot pop from empty stack.")
            return None
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)

    def display(self):
        print("Stack (Top -> Bottom):", self._items[::-1])

# Demonstration
s = Stack()
s.push(10)
s.push(20)
s.push(30)
s.display()
print("Top element (peek):", s.peek())
print("Popped element:", s.pop())
s.display()
```

---

### Practical 14: Phishing Email Analysis (Find Most Common Words)
```python
# Practical 14: Analyze phishing emails and find most common words
import re
from collections import Counter

sample_emails = (
    "URGENT: Your account has been suspended! Please verify your password immediately.\n"
    "Click here to claim your lottery prize of $1,000,000. Urgent bank account update required.\n"
    "Security alert: Your bank account password expired. Click the link to update your login account.\n"
)

words = re.findall(r'\b[a-zA-Z]{3,}\b', sample_emails.lower())
stop_words = {"your", "has", "been", "the", "and", "here"}
filtered_words = [w for w in words if w not in stop_words]

word_counts = Counter(filtered_words)
print("--- Top 5 Suspicious Words in Email Sample ---")
for word, count in word_counts.most_common(5):
    print(f"⚠️ Word: '{word}' -> Frequency: {count}")
```

---

### Practical 15: Read Text File and Display Each Word Separated by '#'
```python
# Practical 15: Display each word separated by '#'
test_file = "passage.txt"

with open(test_file, "w", encoding="utf-8") as f:
    f.write("Python is an elegant and powerful programming language.\nIt emphasizes code readability.\n")

with open(test_file, "r", encoding="utf-8") as f:
    for line in f:
        words = line.strip().split()
        if words:
            print("#".join(words))
```

---

<a name="worked-problems"></a>
## 🧮 11. Step-by-Step Worked Problems & Memory Logic Traces

### Problem 1: Trace of Mutable Default Arguments
```python
def add_item(item, basket=[]):
    basket.append(item)
    return basket

b1 = add_item("apple")
b2 = add_item("banana")
b3 = add_item("orange", [])
b4 = add_item("grape")
```
* **Step-by-Step Trace:**
  1. `b1 = add_item("apple")`: `basket` uses the shared default list `[]`. `"apple"` is appended. `basket = ["apple"]`.
  2. `b2 = add_item("banana")`: `basket` is the SAME shared object. `"banana"` is appended. `basket = ["apple", "banana"]`.
  3. `b3 = add_item("orange", [])`: An explicit new list `[]` was passed! `basket` binds to the new list. Returns `["orange"]`. Default list remains `["apple", "banana"]`.
  4. `b4 = add_item("grape")`: `basket` uses default list again! `"grape"` is appended. Returns `["apple", "banana", "grape"]`.
* **Final Values:** `b1 == b2 == b4 == ["apple", "banana", "grape"]`, `b3 == ["orange"]`.

---

### Problem 2: Slicing Index Calculations
Given `s = "PYTHON108"`:
1. `s[1:6]`: Indices 1 up to 5 $\to$ `'YTHON'`
2. `s[::-1]`: Step -1 $\to$ `'801NOHTYP'`
3. `s[6:1:-2]`: Starts at index 6 (`'1'`), down to >1 with step 2 $\to$ `'1'`, `'H'`, `'T'` $\to$ `'1HT'`
4. `s[-4:-1]`: Starts at index -4 (`'N'`), up to -2 (`'0'`) $\to$ `'N10'`

---

### Problem 3: Shallow Copy vs Deep Copy Memory Trace
```python
import copy
a = [[1, 2], [3, 4]]
b = copy.copy(a)       # Shallow Copy
c = copy.deepcopy(a)   # Deep Copy

a[0][0] = 999
```
* **Trace:**
  * `b` copies the outer list container, but its elements point to the same inner sublists. Thus, `b[0][0]` becomes `999`!
  * `c` recursively clones all inner nested objects. Thus, `c[0][0]` remains `1`.

---

### Problem 4: C3 Linearization MRO Resolution Trace
Given hierarchy:
```python
class O: pass
class A(O): pass
class B(O): pass
class C(A, B): pass
```
* $L(O) = [O]$
* $L(A) = [A, O]$
* $L(B) = [B, O]$
* $L(C) = C + \text{merge}(L(A), L(B), AB) = C + \text{merge}([A, O], [B, O], [A, B])$
  1. Pick $A$ (not in tails): $C, A + \text{merge}([O], [B, O], [B])$
  2. Pick $B$ (not in tails): $C, A, B + \text{merge}([O], [O])$
  3. Pick $O$: $[C, A, B, O]$
* **Final MRO:** `[C, A, B, O, object]`.

---

<a name="viva-voce"></a>
## 🎯 12. Top 75 High-Frequency Exam & Master Viva Voce Questions

1. **Q: Is Python interpreted or compiled?**
   *A:* Both. Source code (`.py`) is compiled to bytecode (`.pyc`), which is executed by the Python Virtual Machine (PVM).
2. **Q: What is PEP 8?**
   *A:* The official Python style guide (4-space indentation, `snake_case` functions, `CamelCase` classes).
3. **Q: What is the difference between `is` and `==`?**
   *A:* `==` checks value equality (content); `is` checks memory identity (`id(a) == id(b)`).
4. **Q: Why are strings immutable in Python?**
   *A:* For memory optimization (string interning), thread safety, and security when strings are used as hash keys in dictionaries and sets.
5. **Q: What is the LEGB rule?**
   *A:* The variable scope lookup hierarchy: **L**ocal $\to$ **E**nclosing $\to$ **G**lobal $\to$ **B**uilt-in.
6. **Q: Differentiate between `append()` and `extend()` in lists.**
   *A:* `append(x)` adds `x` as a single element; `extend(iterable)` iterates and appends each element individually.
7. **Q: What is a lambda function?**
   *A:* An anonymous, single-expression inline function defined with `lambda args: expression`.
8. **Q: Differentiate between shallow copy and deep copy.**
   *A:* Shallow copy (`copy.copy()`) creates a new outer collection referencing the original child items; deep copy (`copy.deepcopy()`) recursively clones all nested objects.
9. **Q: How does dictionary key lookup achieve $O(1)$ time complexity?**
   *A:* Python uses an internal Hash Table with open addressing. The key is hashed via `hash(key)` to compute an instant bucket index.
10. **Q: Why can a list not be used as a dictionary key?**
    *A:* Lists are mutable and unhashable (they lack a fixed `__hash__()` implementation).
11. **Q: What is the purpose of `*args` and `**kwargs`?**
    *A:* `*args` packs arbitrary positional arguments into a `tuple`; `**kwargs` packs arbitrary keyword arguments into a `dict`.
12. **Q: What is the purpose of `__init__` in Python classes?**
    *A:* It is the instance constructor/initializer called automatically upon object instantiation.
13. **Q: What is `self` in Python class methods?**
    *A:* An explicit reference to the current instance of the class through which attributes and methods are accessed.
14. **Q: Explain Name Mangling in Python.**
    *A:* Prefixing attributes with double underscore `__var` transforms them to `_ClassName__var` to prevent accidental namespace collisions in subclasses.
15. **Q: What is Method Resolution Order (MRO)?**
    *A:* The order in which Python searches base classes in multiple inheritance, resolved via the **C3 Linearization Algorithm** (`Class.mro()`).
16. **Q: What does the `super()` function do?**
    *A:* Returns a proxy object delegating method calls to parent/sibling classes according to MRO.
17. **Q: What happens when the `else` block is used with a `for` or `while` loop?**
    *A:* The `else` block executes only if the loop completes normally without encountering a `break` statement.
18. **Q: What is a generator and how does `yield` work?**
    *A:* A generator yields lazy values on demand, preserving function execution state across iterations with $O(1)$ memory usage.
19. **Q: What is the difference between `read()`, `readline()`, and `readlines()`?**
    *A:* `read()` returns the entire file as a single string; `readline()` reads one line; `readlines()` returns a list of all lines.
20. **Q: Why should you always use `with open(...) as f:` for file handling?**
    *A:* It implements Python's Context Manager protocol (`__enter__` / `__exit__`), guaranteeing file closure even if an unhandled exception occurs.
21. **Q: What is Pickling and Unpickling?**
    *A:* Pickling (`pickle.dump()`) serializes Python objects into a binary byte stream; Unpickling (`pickle.load()`) deserializes bytes back into Python objects.
22. **Q: What is the difference between `pass`, `continue`, and `break`?**
    *A:* `pass` is a null statement; `continue` skips the rest of the current iteration; `break` terminates the loop immediately.
23. **Q: What is the default recursion limit in Python?**
    *A:* Typically 1000 frames; checked with `sys.getrecursionlimit()` and modified using `sys.setrecursionlimit(n)`.
24. **Q: What is a singleton tuple?**
    *A:* A tuple with a single element, written with a trailing comma: `t = (5,)`.
25. **Q: What is the difference between `remove()`, `pop()`, and `del` for lists?**
    *A:* `remove(val)` removes the first matching value; `pop(idx)` removes and returns the element at index; `del lst[idx]` deletes the item directly.
26. **Q: What is list comprehension?**
    *A:* A concise syntax `[expr for item in seq if cond]` executed at C-speed in CPython.
27. **Q: What is the output of `print(0.1 + 0.2 == 0.3)`?**
    *A:* `False`, due to IEEE 754 binary floating-point representation rounding.
28. **Q: What are Dunder / Magic methods?**
    *A:* Double-underscore methods (e.g., `__str__`, `__add__`) that integrate custom classes with Python operators.
29. **Q: Differentiate between `__str__` and `__repr__`.**
    *A:* `__str__` is for end-user readability; `__repr__` is for developer debugging.
30. **Q: What is duck typing in Python?**
    *A:* "If it walks like a duck and quacks like a duck, it's a duck." Checking for methods/attributes dynamically at runtime.
31. **Q: What does the `nonlocal` keyword do?**
    *A:* Rebinds variables in the nearest enclosing (non-global) scope.
32. **Q: Difference between `re.match()` and `re.search()`?**
    *A:* `re.match()` checks only at the start of a string; `re.search()` scans the entire string.
33. **Q: What does `re.findall()` return?**
    *A:* A list of all non-overlapping regex pattern matches in the text.
34. **Q: How do you raise a custom exception?**
    *A:* `class MyError(Exception): pass`, then `raise MyError("Message")`.
35. **Q: What is the `finally` block used for?**
    *A:* A block that always executes for cleanup regardless of errors.
36. **Q: What is the result of `2 ** 3 ** 2`?**
    *A:* `512` (evaluated right-to-left: $3^2 = 9$, then $2^9 = 512$).
37. **Q: What is an Armstrong Number?**
    *A:* A number equal to the sum of its digits each raised to the power of the total number of digits ($153 = 1^3 + 5^3 + 3^3$).
38. **Q: What is a Perfect Number?**
    *A:* A positive integer equal to the sum of all its proper divisors excluding itself ($6 = 1 + 2 + 3$, $28 = 1 + 2 + 4 + 7 + 14$).
39. **Q: How does a stack operate and how is it implemented using a list?**
    *A:* LIFO order; implemented using `list.append()` for push and `list.pop()` for pop ($O(1)$ amortized).
40. **Q: How do you open a file for read/write without truncation?**
    *A:* Use mode `'r+'` (`'w+'` truncates the file immediately upon opening).
41. **Q: What is `sys.argv`?**
    *A:* A list containing command-line arguments passed to the Python script.
42. **Q: What is the difference between a module and a package?**
    *A:* A module is a single `.py` file; a package is a directory of modules containing `__init__.py`.
43. **Q: What is string interning?**
    *A:* An optimization where Python caches immutable string objects to reuse memory addresses.
44. **Q: What does `seek(0)` do on a file object?**
    *A:* Repositions the file read/write pointer back to the beginning of the file.
45. **Q: What is a Sparse Matrix and how is it represented using a dictionary?**
    *A:* A matrix with mostly zeroes, stored efficiently as coordinate tuple keys `{(row, col): val}`.
46. **Q: What is method overriding in OOP?**
    *A:* When a subclass provides its own implementation of a method defined in its parent class.
47. **Q: Can Python classes have multiple constructors?**
    *A:* Not natively; achieved with default arguments (`def __init__(self, a=None)`) or class methods (`@classmethod def from_str(cls, s)`).
48. **Q: What is the purpose of `zip()`?**
    *A:* Combines elements from multiple iterables into tuples until the shortest iterable ends.
49. **Q: What is the boolean value of `[]`, `{}`, `""`, and `0`?**
    *A:* All are falsy and evaluate to `False`.
50. **Q: What is the difference between `raw_input()` and `input()`?**
    *A:* In Python 3, `raw_input()` was removed; `input()` always returns user input as a string (`str`).
51. **Q: What is the Global Interpreter Lock (GIL) and why does it exist?**
    *A:* A mutex in CPython that restricts bytecode execution to one native thread at a time, ensuring thread-safe reference count management.
52. **Q: How does Python perform Garbage Collection?**
    *A:* Primary: Reference counting (`ob_refcnt == 0` triggers instant deallocation). Secondary: Cyclic Generational GC across 3 generations to detect reference cycles.
53. **Q: What is the difference between `__new__` and `__init__`?**
    *A:* `__new__` is a static method that allocates memory and returns a new instance; `__init__` receives that instance as `self` to initialize its attributes.
54. **Q: What are `__slots__` and why are they used?**
    *A:* Defines a static tuple of attribute names, eliminating `instance.__dict__` to save memory and accelerate attribute access.
55. **Q: What is a closure in Python?**
    *A:* A nested function that remembers and accesses variables from its lexical enclosing scope even after the outer function has returned.
56. **Q: What is a decorator and how is `@functools.wraps` used?**
    *A:* A higher-order function that extends the behavior of another function. `@functools.wraps` preserves original function metadata (`__name__`, `__doc__`).
57. **Q: Explain Python's "Pass-by-Object-Reference" mechanism.**
    *A:* Reassigning inside a function rebinds the local name pointer; mutating a mutable object alters the shared heap object directly.
58. **Q: Why is pickling untrusted data dangerous?**
    *A:* Deserialization via `pickle.load()` can execute arbitrary malicious code if the payload overrides `__reduce__()`.
59. **Q: How does CPython optimize small integers?**
    *A:* Pre-allocates a singleton array for integers in range `[-5, 256]` in memory at startup.
60. **Q: What is the difference between lazy and greedy regular expressions?**
    *A:* Greedy (`*`, `+`) matches as much text as possible; Lazy (`*?`, `+?`) matches the minimum text required.
61. **Q: What is exception chaining with `raise ... from`?**
    *A:* Explicitly associates a newly raised exception with the original root-cause exception (`__cause__`).
62. **Q: How does `collections.defaultdict` differ from a standard `dict`?**
    *A:* Calling a non-existent key automatically creates and returns a default value using the supplied factory function.
63. **Q: What is a generator expression vs a list comprehension?**
    *A:* Generator expressions `(x for x in seq)` return a memory-efficient lazy iterator ($O(1)$ memory); list comprehensions `[x for x in seq]` allocate the full list in memory ($O(n)$ memory).
64. **Q: What is the signature of `__exit__` in a Context Manager?**
    *A:* `def __exit__(self, exc_type, exc_val, exc_tb):` returning `True` suppresses the exception.
65. **Q: What does the `@property` decorator do?**
    *A:* Transforms a method into a getter attribute, allowing access via `obj.attr` while enabling custom getter/setter validation logic.
66. **Q: What is the difference between `iter()` and `next()`?**
    *A:* `iter(obj)` calls `obj.__iter__()` to return an iterator; `next(it)` calls `it.__next__()` to yield the next item or raise `StopIteration`.
67. **Q: What is Abstract Base Class (ABC) in Python?**
    *A:* A class inheriting from `abc.ABC` containing `@abstractmethod` decorators that enforces interface implementation on derived subclasses.
68. **Q: What is the difference between `sort()` and `sorted()`?**
    *A:* `list.sort()` sorts the list in-place and returns `None`; `sorted(iterable)` returns a new sorted list leaving the original iterable unchanged.
69. **Q: How does Python handle arbitrary-precision integers?**
    *A:* Using variable-length arrays of 30-bit digits (Bignum representation in CPython), constrained only by available RAM.
70. **Q: What is the purpose of `enumerate()`?**
    *A:* Yields pairs of `(index, value)` while iterating over a sequence, avoiding manual counter tracking.
71. **Q: What is Method Resolution Order C3 Linearization rule?**
    *A:* Ensures child classes precede parent classes and preserves base class declaration order without duplicate inheritance conflicts.
72. **Q: What is `sys.getrefcount(obj)`?**
    *A:* Returns the current reference count of an object (always 1 higher because passing it to the function creates a temporary reference).
73. **Q: What does `any()` and `all()` do?**
    *A:* `any()` returns `True` if at least one element is truthy; `all()` returns `True` only if every element is truthy.
74. **Q: How do you prevent regex catastrophic backtracking?**
    *A:* Avoid nested quantifiers (e.g., `(a+)+`), use atomic grouping/possessive quantifiers where available, and make expressions specific.
75. **Q: What is the difference between `deepcopy` and `copy` regarding self-referencing cyclic objects?**
    *A:* `deepcopy` maintains an internal memo dictionary mapping original object IDs to cloned copies, preventing infinite recursion loops in circular graphs.

---

<a name="exam-strategy"></a>
## 🏆 13. 100-Percentile 4-Tier Exam Scoring Strategy

```
+---------------------------------------------------------------------------------------------------+
|                        100-PERCENTILE 4-TIER INT108 EXAM EXECUTION ROADMAP                        |
+---------------------------------------------------------------------------------------------------+
                                                  |
        ┌─────────────────────────────────────────┼─────────────────────────────────────────┐
        ▼                                         ▼                                         ▼
[ TIER 1: HIGH-WEIGHTAGE CORE ]         [ TIER 2: ADVANCED STRUCTURES ]           [ TIER 3: OOP, FILES & REGEX ]
• PVM bytecode compilation model        • Slicing tricks s[start:stop:step]       • OOP 4 Pillars & Name Mangling
• Operators & PEMDAS right-to-left math • Shallow copy vs Deep copy memory trace  • Dunder methods (__str__, __add__)
• Loop 'else' execution invariants      • Dict hash tables & Sparse Matrices      • Context manager with open()
• All 15 practical algorithms (Factorial,• Mutable default argument trap          • pickle.dump / pickle.load
  Fibonacci, Armstrong, Perfect, Stack) • Recursive call stack trace trees        • try-except-else-finally lifecycle
        │                                         │                                         │
        └─────────────────────────────────────────┼─────────────────────────────────────────┘
                                                  ▼
                                 [ TIER 4: PERFECT EXAM PRESENTATION ]
        1. Always write complete, PEP 8 compliant, syntactically clean Python code with indentation.
        2. Draw ASCII memory pointer diagrams for variable bindings, list references, and copy differences.
        3. For every recursive problem, show the STACK UNWINDING tree clearly.
        4. In lab viva, highlight exact time complexities: List indexing O(1), Dict lookup O(1), Search O(n).
```

---
*All files compiled and synchronized across `D:\`, `D:\e drive everything\`, `ClaudeWorkspace`, and `Downloads`.*
