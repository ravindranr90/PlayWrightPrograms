import axios from "axios"

const endpoint = "https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username ="ravindranr90@gmail.com"
const apikey = "ATATT3xFfGF0aEw0ZJSXq6wNRZiEtgj4NW2AxvMPbOBpGQCq5a4xAJ7jnhwAlf1U-sAELclr1OWyBofY-fgeUO-ciTgo0bNEz43_ses6hnm4uF-MjC2vMU1EUVidt5KdJsIKvAViWM-roy1OXSIRmA9AcWRc4TOGu8VWAguPkbIBKPV17rEFnmo=48617F9B"
const projectId="PD"

export async function createIssue(summary:string, description:string){

    /* Very basic thing you have to have summary of the issue */

    const issueBody ={
        //Here for jiraapi documentation to get the POST endpoint and show swagger document to show bodayData under fields
        "fields":{
            "project":{
                "key": projectId               
            },
            "summary":summary,
            "description":description,
            "issuetype":{
                    "name":"Bug"
            },
        }

        }
        const reponse = await axios.post(endpoint,issueBody,{
            headers:{
                "Content-Type":"application/json"
            },
            auth:{
            username:username,
            password:apikey
            }
        })

        console.log(reponse.status);
        console.log(reponse.data);
        
        
}

createIssue("Learning JIRA","Using axios to create Issue")