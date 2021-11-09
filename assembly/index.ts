// The entry file of your WebAssembly module.
declare function log(n: i32): void

export function add(a: i32, b: i32, n: i32): i32 {

  log(n);
  
  if (a === 1) {
    abort();
  }
  return a + b;
}
