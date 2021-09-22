import { Edge } from "@base-model";

class PersonEdge extends Edge {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "person-edge";
        this.connector = {
            name: "rounded",
            args: {
                radius: 8,
            },
        };
        this.attrs = {
            line: {
                stroke: "#1890ff",
                strokeDasharray: 5,
                targetMarker: "classic",
                style: {
                    animation: "ant-line 30s infinite linear",
                },
            },
        };
        this.labels = [
            {
                img: {  },
            },
        ];
        this.defaultLabel = {
            markup: [
                {
                    tagName: "image",
                    selector: "img",
                },
            ],
            attrs: {
                img: {
                    width: 36,
                    height: 36,
                    'xlink:href': 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTExMSAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPg0KICAgIDxwYXRoDQogICAgICAgIGQ9Ik03OTguMzUxMzYgMzAzLjM5MDcyYTMwLjE4NzUyIDMwLjE4NzUyIDAgMCAxLTMwLjIyODQ4LTMwLjIyODQ4YzAtNzEuNjgtNjkuMzA0MzItMTI5LjkyNTEyLTE1NC41MDExMi0xMjkuOTI1MTItODUuMTU1ODQgMC0xNTQuNDYwMTYgNTguMjQ1MTItMTU0LjQ2MDE2IDEyOS45MjUxMmEzMC4xODc1MiAzMC4xODc1MiAwIDEgMS02MC40NTY5NiAwYzAtMTA1LjAyMTQ0IDk2LjQxOTg0LTE5MC4zODIwOCAyMTQuOTE3MTItMTkwLjM4MjA4IDExOC41MzgyNCAwIDIxNC45MTcxMiA4NS40ODM1MiAyMTQuOTE3MTIgMTkwLjM4MjA4YTMwLjIyODQ4IDMwLjIyODQ4IDAgMCAxLTMwLjE4NzUyIDMwLjIyODQ4eiBtLTE4NC43Mjk2IDE4MS4wNDMyYy04Mi44MjExMiAwLTE1OS4wODg2NC00Mi44MDMyLTE5NC4zNTUyLTEwOS4wNzY0OGEzMC4xODc1MiAzMC4xODc1MiAwIDEgMSA1My4zNzA4OC0yOC4zNDQzMmMyNC45NDQ2NCA0Ni44MTcyOCA4MC4yODE2IDc3LjAwNDggMTQxLjEwNzIgNzcuMDA0OCA2MC44MjU2IDAgMTE2LjE2MjU2LTMwLjE4NzUyIDE0MS4wNjYyNC03Ny4wMDQ4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDUzLjM3MDg4IDI4LjM0NDMyYy0zNS40NzEzNiA2Ni4yNzMyOC0xMTEuNzM4ODggMTA5LjExNzQ0LTE5NC41NiAxMDkuMTE3NDR6Ig0KICAgICAgICBmaWxsPSIjMTg5MGZmIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTc5OC4zNTEzNiAzMDMuMzkwNzJIMzA0LjI1MDg4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDAtNjAuNDE2aDQ5NC4xMDA0OGEzMC4xODc1MiAzMC4xODc1MiAwIDEgMSAwIDYwLjQxNnogbTQ5LjE1MiA2NTUuNjg3NjhhMzAuMTg3NTIgMzAuMTg3NTIgMCAxIDEgMC02MC40MTZjMzcuNjgzMiAwIDY4LjI4MDMyLTI0LjE2NjQgNjguMjgwMzItNTMuOTg1Mjh2LTMxLjUzOTJjMC0xMzkuOTYwMzItMTM1LjUzNjY0LTI1My43ODgxNi0zMDIuMjg0OC0yNTMuNzg4MTYtMTY2LjcwNzIgMC0zMDIuMDggMTEzLjkwOTc2LTMwMi4wOCAyNTMuODcwMDh2MzEuNTM5MmMwIDI5LjczNjk2IDMwLjU5NzEyIDUzLjk4NTI4IDY4LjIzOTM2IDUzLjk4NTI4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDAgNjAuNDU2OTZjLTcwLjk4MzY4IDAtMTI4LjY5NjMyLTUxLjM2Mzg0LTEyOC42OTYzMi0xMTQuNDAxMjh2LTMxLjU4MDE2YzAtMTczLjI2MDggMTYyLjczNDA4LTMxNC4xNjMyIDM2Mi42NTk4NC0zMTQuMTYzMiAxOTkuOTY2NzIgMCAzNjIuNjU5ODQgMTQwLjkwMjQgMzYyLjY1OTg0IDMxNC4xNjMydjMxLjUzOTJjMCA2My4wNzg0LTU3Ljc1MzYgMTE0LjMxOTM2LTEyOC43NzgyNCAxMTQuMzE5MzZ6Ig0KICAgICAgICBmaWxsPSIjMTg5MGZmIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTcwNi40MzcxMiA5NTkuMDc4NEg1MzEuNzgzNjhhOTAuNzY3MzYgOTAuNzY3MzYgMCAwIDEtOTAuNjQ0NDgtOTAuNjQ0NDh2LTEzMS40ODE2YzAtNDkuOTcxMiA0MC42NzMyOC05MC42NDQ0OCA5MC42NDQ0OC05MC42NDQ0OGgxNzQuNjUzNDRjNDkuOTcxMiAwIDkwLjY0NDQ4IDQwLjY3MzI4IDkwLjY0NDQ4IDkwLjY0NDQ4djEzMS40ODE2YzAgNDkuOTcxMi00MC42NzMyOCA5MC42NDQ0OC05MC42NDQ0OCA5MC42NDQ0OHogbS0xNzQuNjUzNDQtMjUyLjM1NDU2YTMwLjMxMDQgMzAuMzEwNCAwIDAgMC0zMC4xODc1MiAzMC4yMjg0OHYxMzEuNDgxNmEzMC4zMTA0IDMwLjMxMDQgMCAwIDAgMzAuMTg3NTIgMzAuMjI4NDhoMTc0LjY1MzQ0YTMwLjMxMDQgMzAuMzEwNCAwIDAgMCAzMC4xODc1Mi0zMC4yMjg0OHYtMTMxLjQ4MTZhMzAuMzEwNCAzMC4zMTA0IDAgMCAwLTMwLjE4NzUyLTMwLjIyODQ4SDUzMS43ODM2OHoiDQogICAgICAgIGZpbGw9IiMxODkwZmYiPjwvcGF0aD4NCjwvc3ZnPg=='
                },
            },
            position: {
                distance: 0.5,
                offset: {
                    x: -18,
                    y: -40
                },
            },
        };
    }
}

export default PersonEdge;
