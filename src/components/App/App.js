import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import GeneralInfo from '../GeneralInfo/GeneralInfo'
import Features from '../Features/Features'
import GenerateReadme from '../GenerateReadme/GenerateReadme'
import Setup from '../Setup/Setup'
import './App.css'


const App = () => {
    return (
        <div className="page">
            <Navbar />
            <div className="container projectInfo">
                <ProjectDetails />
                <GeneralInfo />
                <Features />
                <Setup />
            </div>
            <GenerateReadme />
            
        </div>
    )
}

export default App