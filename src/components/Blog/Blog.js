import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-300 py-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    #1 What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-base-100">
                    <strong>The built-in way that React provides for setting component states is by using setState()</strong> and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                    <br />
                    1. Hooks <br />
                    2. React Context API <br />
                    3. Apollo Link State
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300 py-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    #2 How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-base-100">
                    <strong>Prototypical inheritance refers to the ability to access object properties from another object.</strong>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300 py-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    #3 What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-base-100">
                    <strong>A unit test</strong> is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                    <br /> <br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300 py-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    #4 Differences between React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-base-100">
                    <strong>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.</strong> Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.
                    <br /> <br />
                    It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.
                </div>
            </div>
        </div>
    );
};

export default Blog;