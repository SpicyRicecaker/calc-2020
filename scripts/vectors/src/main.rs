//! # Vectors
//! This crate takes in some form of a vector and outputs all related data that is required.
//! We'll try to implement it in the terminal for now but porting it over to the web shouldn't be that hard.
//! Need to learn some basic wasm + svelte for that though.
//!
//! ## Process
//! Takes in vector
//!
//! ## Returns
//! Magnitude  
//! Unit vector  
//! Initial and terminating point
//! 
//! ## Allows for
//! Adding and subracting vectors  
//! Multiplying vectors with constants  
//! Multiplying vectors with vectors  

// use std::env;
use vectors::Config;

fn main() {
    // The three forms of a vector are
    // `V = < V_x, V_y >`
    
    // First get user input
    let input = Config::new(&env::args());
}
