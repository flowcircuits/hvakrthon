export interface Point {
	x: number
	y: number
	z: number
}

export type NodeType = "SOURCE" | "CONNECTOR" | "SINK"

export interface Adjacency {
	id: string
}

export interface Node {
	type: NodeType
	id: string
	point: Point
	adjacencies: Adjacency[]
}

export type Graph = Record<string, Node>
