import express, { Request, Response } from "express";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  const { slack_name, track } = req.query;

  // Get the current day and UTC time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTime = currentDate.toISOString();

  // Construct the GitHub URLs
  const githubRepoUrl = "https://github.com/username/repo";
  const githubFileUrl = `${githubRepoUrl}/blob/main/file_name.ext`;

  // Construct the response JSON
  const responseJson = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(responseJson);
});

export default app;
