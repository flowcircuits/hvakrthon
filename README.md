# HVAKRthon: Auto-Routing Challenge

## Overview

HVAKR is a modern, cloud-based design platform for HVAC engineers, streamlining the complex process of system design, load calculations, and equipment selection. This repository hosts the auto-routing challenge, where participants must develop an algorithm to automatically route ducts in compliance with engineering constraints.

## Challenge

Your task is to implement an auto-routing feature that connects HVAC components with ductwork while adhering to specific rules and optimizing performance metrics.

## Rules

To be a valid solution, the routed ducts must follow these constraints:

-   **No Collisions:** Ducts cannot intersect or collide.
-   **Connection Limits:**
    -   Source nodes: max 1 adjacency
    -   Sink nodes: max 1 adjacency
    -   Connector nodes: max 4 adjacencies
-   **Vertical Connections:** Z-axis connections must be straight up/down.
-   **Duct Length:** Minimum length is **24 inches**.
-   **Angles:**
    -   Must be multiples of **45 degrees** in the XY plane.
    -   Non-90-degree angles (45°, 135°, 225°, 315°) must be limited to **60 inches**.

## Bonus Optimization

Once a valid solution is found, evaluate it based on:

1. **Total Static Pressure Drop**

    - Measures air resistance in the network.
    - More length and bends increase pressure drop.
    - Goal: **Minimize** pressure drop.

2. **Total Duct Weight**
    - Determines material usage (sheet metal weight).
    - Higher pressure drop can lead to larger duct sizes, increasing weight.
    - Goal: **Minimize** duct weight.

## Getting Started

### 1. Clone the Repository

```sh
 git clone https://github.com/flowcircuits/hvakrthon.git
 cd hvakrthon
```

## Submission

-   Implement your solution.
-   Run your code and output your solved graph.
-   Copy and paste your solved graph into https://hvakrthon-site-2025.vercel.app/visualizer

## Resources

-   Example data and type definitions are included in `examples/`.
-   The evaluation website visualizes and processes your solution through HVAKR’s API.

## License

This project is licensed under the MIT License.
