export const TODO_LIST_ADDRESS = '0xeE3131e6BBF9c59c440874152106d94642Ad077d'
export const TODO_LIST_ABI=[
  {
      "name": "tasks",
      "type": "function",
      "inputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "id",
              "type": "uint256"
          },
          {
              "name": "content",
              "type": "string"
          },
          {
              "name": "completed",
              "type": "bool"
          }
      ],
      "payable": false,
      "constant": true,
      "stateMutability": "view"
  },
  {
      "name": "taskCount",
      "type": "function",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "constant": true,
      "stateMutability": "view"
  },
  {
      "type": "constructor",
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable"
  },
  {
      "name": "TaskCreated",
      "type": "event",
      "inputs": [
          {
              "name": "id",
              "type": "uint256",
              "indexed": false
          },
          {
              "name": "content",
              "type": "string",
              "indexed": false
          },
          {
              "name": "completed",
              "type": "bool",
              "indexed": false
          }
      ],
      "anonymous": false
  },
  {
      "name": "TaskCompleted",
      "type": "event",
      "inputs": [
          {
              "name": "id",
              "type": "uint256",
              "indexed": false
          },
          {
              "name": "completed",
              "type": "bool",
              "indexed": false
          }
      ],
      "anonymous": false
  },
  {
      "name": "createTask",
      "type": "function",
      "inputs": [
          {
              "name": "_content",
              "type": "string"
          }
      ],
      "outputs": [],
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable"
  },
  {
      "name": "toggleCompleted",
      "type": "function",
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          }
      ],
      "outputs": [],
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable"
  }
]