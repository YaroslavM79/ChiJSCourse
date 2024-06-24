import React, { Component } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoAppState {
    tasks: Task[];
    filter: string;
  }
  
  class TodoApp extends Component<{}, TodoAppState> {

    taskInput: React.RefObject<HTMLInputElement>;

    constructor(props: {}) {
      super(props);
      this.state = {
        tasks: [],
        filter: 'All'
      };
      this.taskInput = React.createRef();
    }
  
    componentDidMount() {
      console.log("Component was added.");
    }
  
    componentDidUpdate(prevProps: {}, prevState: TodoAppState) {
      if (prevState.tasks !== this.state.tasks || prevState.filter !== this.state.filter) {
        console.log("Todo tasks has been changed");
      }
    }

    //-------------------------------
    handleAddTask = (taskText: string): void => {
        if (taskText) {
            this.setState(prevState => ({
                tasks: [...prevState.tasks, { id: Date.now(), text: taskText, completed: false }]
            }));
        }
    }
    
    handleDeleteTask = (taskId: number): void => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }));
    }
    
    toggleTaskCompletion = (taskId: number): void => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }));
    }
    
    setFilter = (filter: string): void => {
        this.setState({ filter });
    }

    renderTasks = () => {
        const { tasks, filter } = this.state;
        return tasks.filter(task => {
            if (filter === 'Completed') return task.completed;
            if (filter === 'Not completed') return !task.completed;
            return true;
        }).map(task => (
            <div key={task.id}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => this.toggleTaskCompletion(task.id)}
                />
                {task.text}
                <button onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
            </div>
        ));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Add new task"
                    ref={this.taskInput}
                    onKeyDown={event => {
                        if (event.key === 'Enter' && this.taskInput.current) {
                            this.handleAddTask(this.taskInput.current.value);
                            this.taskInput.current.value = '';
                        }
                    }}
                />
                <button onClick={() => {
                    if (this.taskInput.current) {
                        this.handleAddTask(this.taskInput.current.value);
                        this.taskInput.current.value = '';
                    }
                }}>Add</button>
                <div>
                    <button onClick={() => this.setFilter('All')}>All</button>
                    <button onClick={() => this.setFilter('Completed')}>Completed</button>
                    <button onClick={() => this.setFilter('Not completed')}>Not completed</button>
                </div>
                <div>{this.renderTasks()}</div>
            </div>
        );
    }

}
      
export default TodoApp;
