export interface Point {
	x: number
	y: number
	z: number
}

export interface Adjacency {
	id: string
}

export interface SourceNode {
	type: "SOURCE"
	id: string
	groupId: string
	point: Point
	adjacencies: Adjacency[]
}

export interface ConnectorNode {
	type: "CONNECTOR"
	id: string
	point: Point
	adjacencies: Adjacency[]
}

export interface SinkNode {
	type: "SINK"
	id: string
	groupId: string
	point: Point
	flowRate: number
	adjacencies: Adjacency[]
}

export type Node = SourceNode | ConnectorNode | SinkNode

export type NodeType = Node["type"]

export type Graph = Record<string, Node>
