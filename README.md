# js-async-notes
notes on Asynchronous Javascript


![Event Loop](/imgs/Screenshot%202026-02-10%20190404.jpg)

```
// boil water for 10 minutes
// chop carrots
// add carrots to boil for 5 min
// chop onion
// add onion to boil for 5 min
// done
boilWater();
console.log("`chop carrots"`);

function boilWater() {
  console.log("`water is boiling`");
  setTimeout(() => {
    console.log("`done`");
    console.log('add carrots to boil for 5 min');
    
    setTimeout(() => {
        console.log('done');
    }, 10000);
    
  }, 10000);
}
```


## Key Components

### 1. Call Stack
The call stack is where JavaScript keeps track of function execution. It's a LIFO (Last In, First Out) structure. When a function is called, it's pushed onto the stack. When it returns, it's popped off.

### 2. Browser APIs
Browser APIs (like `setTimeout`) are provided by the browser, not JavaScript itself. They handle asynchronous operations outside the main JavaScript thread.

### 3. Callback Queue
When async operations complete, their callbacks are placed in the callback queue, waiting to be executed.

### 4. Event Loop
The event loop constantly checks if the call stack is empty. If it is, it takes the first callback from the queue and pushes it onto the stack for execution.

## Execution Timeline

### Step 1: Initial Execution (0ms)
**Call Stack:** `[boilWater()]`
- `boilWater()` is called and pushed onto the call stack
- Inside `boilWater()`, `console.log("water is boiling")` executes immediately
- **Output:** `"water is boiling"`

### Step 2: First setTimeout Registration (0ms)
**Call Stack:** `[boilWater()]`
**Browser API:** Timer starts (10,000ms)
- `setTimeout()` is called with a callback and 10-second delay
- The callback is NOT executed yet—it's handed off to the Browser API
- The Browser API starts a 10-second timer
- `setTimeout()` returns immediately, and `boilWater()` completes
- **Call Stack:** `[]` (now empty)

### Step 3: Synchronous Code Continues (0ms)
**Call Stack:** `[console.log()]`
- Back in the main execution, `console.log("chop carrots")` executes
- **Output:** `"chop carrots"`
- **Call Stack:** `[]` (empty again)

### Step 4: Waiting Period (0ms - 10,000ms)
**Call Stack:** `[]`
**Browser API:** Timer counting down...
**Callback Queue:** Empty
- The JavaScript engine has nothing to execute
- The event loop keeps checking, but the call stack is empty and the queue is empty
- The Browser API timer continues counting in the background

### Step 5: First Timer Completes (10,000ms)
**Browser API:** Timer expires!
**Callback Queue:** `[first callback]`
- After 10 seconds, the Browser API timer completes
- The first callback is moved to the callback queue

### Step 6: Event Loop Moves Callback to Stack (10,000ms)
**Call Stack:** `[first callback]`
**Callback Queue:** `[]`
- Event loop sees the call stack is empty
- It takes the callback from the queue and pushes it onto the stack
- The callback executes:
  - `console.log("done")` runs
  - **Output:** `"done"`
  - `console.log('add carrots to boil for 5 min')` runs
  - **Output:** `"add carrots to boil for 5 min"`

### Step 7: Second setTimeout Registration (10,000ms)
**Call Stack:** `[first callback]`
**Browser API:** New timer starts (10,000ms)
- Inside the first callback, a second `setTimeout()` is called
- Another 10-second timer starts in the Browser API
- The first callback completes and is popped off the stack
- **Call Stack:** `[]`

### Step 8: Second Waiting Period (10,000ms - 20,000ms)
**Call Stack:** `[]`
**Browser API:** Second timer counting down...
- Similar to Step 4, we wait for the second timer

### Step 9: Second Timer Completes (20,000ms)
**Browser API:** Second timer expires!
**Callback Queue:** `[second callback]`
- The second callback is placed in the queue

### Step 10: Second Callback Executes (20,000ms)
**Call Stack:** `[second callback]`
- Event loop moves the second callback to the stack
- `console.log('done')` executes
- **Output:** `"done"`
- **Call Stack:** `[]`
- **Program complete!**

## Complete Output Sequence
```
"water is boiling"        // Immediate (0ms)
"chop carrots"            // Immediate (0ms)
"done"                    // After 10 seconds
"add carrots to boil for 5 min"  // After 10 seconds
"done"                    // After 20 seconds total
