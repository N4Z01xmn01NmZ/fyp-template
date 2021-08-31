# String

## C String

In C and C++, a string is an array of characters. When initializing a C string the string is usually immutable.

```c++
const char* name = "Odonata";
```

## Standard String

Dynamic string is defined in the standard library. Assignment and concatenation are possible when using this type of string.

```c++
// Use the string library
#include <string>

// Std string initialization
std::string name = "Odonata";
```

Std string can be converted to C string using the `c_str` method.

```c++
std::cout << name.c_str() << std::endl;
```
