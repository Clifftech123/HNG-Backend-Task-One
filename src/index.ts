import express, { Request, Response } from "express";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  const { slack_name, track } = req.query;

  // Validate slack_name and track parameters
  if (
    !slack_name ||
    typeof slack_name !== "string" ||
    slack_name.trim().length === 0
  ) {
    return res
      .status(400)
      .json({
        error:
          "slack_name parameter is required and must be a non-empty string",
      });
  }
  if (!track || typeof track !== "string" || track.trim().length === 0) {
    return res
      .status(400)
      .json({
        error: "track parameter is required and must be a non-empty string",
      });
  }

  // Get the current day and UTC time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTime = currentDate.toISOString();

  // Construct the GitHub URLs
  const githubRepoUrl = "https://github.com/Clifftech123/HNG-Backend-Task-One";
  const githubFileUrl = `${githubRepoUrl}https:/blob/main/src/index.ts`;

  // Construct the response JSON
  const responseJson = {
    slack_name: slack_name.trim(),
    current_day: currentDay,
    utc_time: utcTime,
    track: track.trim(),
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(responseJson);
});

//  Running the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
