import "../../../styles/Problem.css"
import Button from "../../utils/Button";

const Description = () =>{

    return(
        <div className="description_container">
            <h1>1. Two Sum</h1>
            <h4> Easy </h4>
            <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>
            <h4>Example 1: </h4>
            <div className="codeblock">
                <p>Input: nums = [2,7,11,15], target = 9</p>
                <p>Output: [0,1]</p>
                <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
            </div>
            <h4>Example 2: </h4>
            <div className="codeblock">
                <p>Input: nums = [2,7,11,15], target = 9</p>
                <p>Output: [0,1]</p>
                <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
            </div>
            <h4>Example 3: </h4>
            <div className="codeblock">
                <p>Input: nums = [2,7,11,15], target = 9</p>
                <p>Output: [0,1]</p>
                <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
            </div>
            <h4>Constraints: </h4>
            <div className="codeblock">
                <ul>
                    <li> 2 &#60;= nums.length &#60;= 104</li>
                    <li>-109 &#60;= nums[i] &#60;= 109</li>
                    <li>-109 &#60;= target &#60;= 109</li>
                    <li><h4>Only one valid answer exists.</h4></li>
                </ul>
            </div>

        </div>
    )
}

export default Description;