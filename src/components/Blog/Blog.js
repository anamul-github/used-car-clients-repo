import React from 'react';

const Blog = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                    <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        #1 What are the different ways to manage a state in a React application?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>The built-in way that React provides for setting component states is by using setState()</strong> and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                        <br />
                        1. Hooks <br />
                        2. React Context API <br />
                        3. Apollo Link State
                    </div>
                </div>
            </div>
            <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        #2 How does prototypical inheritance work?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>Prototypical inheritance refers to the ability to access object properties from another object.</strong>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </div>
                </div>
            </div>
            <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        #3 What is a unit test? Why should we write unit tests?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>A unit test</strong> is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                        <br /> <br />
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </div>
                </div>
            </div>

            <div className="accordion-item border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingFour">
                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                        aria-controls="collapseFour">
                        #4 Differences between React vs. Angular vs. Vue?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.</strong> Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.
                        <br /> <br />
                        It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;