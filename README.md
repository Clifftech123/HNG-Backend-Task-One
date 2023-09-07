# Internship Task - API Endpoint

This repository contains a  solution for an HNG Backend  task one. The objective of the task was to create and host an API endpoint that takes two GET request query parameters: `slack_name` and `track`. The API should return specific information in JSON format, including Slack name, current day of the week, current UTC time, track, GitHub file URL, GitHub repo URL, and a success status code.

I successfully created the API, adhered to the specified JSON format, and ensured that it meets the acceptance criteria.  The is solution is hosted at [Here ](https://hngtask1pipthablack.onrender.com/api?slack_name=Samuel&track=backend), and the code can be found in this repository.

## Task Details

- **Objective:** Create and host an API endpoint.
- **Requirements:** Accept two GET request query parameters and return specific JSON data.
- **Acceptance Criteria:** Ensure endpoint creation, correct response format, and adherence to task requirements.

## Solution

We need to get some out put like 

```json
{
    "slack_name": "example_name",
    "current_day": "Thursday",
    "utc_time": "2023-09-07T10:03:00.504Z",
    "track": "backend",
    "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
    "github_repo_url": "https://github.com/username/repo",
    "status_code": 200
}

```
