 const features = () =>{
    let feature = `
    Features include:<br>
    1.Version Control: <br>
    GitHub uses Git to track changes in files and coordinate work on those files among multiple people. This allows you to see the history of changes and revert to previous versions if necessary.<br>
    2.Repositories: <br>
    A repository (or "repo") is a project container that holds all the files and history for a particular project. Repositories can be public (visible to everyone) or private (visible only to selected users).<br>
    3.Branches: <br>
    Branches allow you to create separate lines of development within a repository. This enables multiple people to work on different features or fixes simultaneously without interfering with each other’s work. The main branch is typically the default and primary branch.<br>
    4.Pull Requests:<br>
    Pull requests are a way to propose changes to a repository. You can create a pull request to notify others about changes you’ve pushed to a branch in a repository. Other users can review the changes, discuss them, and, if everything looks good, merge the changes into the main branch. <br>
    5.Issues:<br>
    GitHub provides an issue tracking system to track bugs, enhancements, tasks, and other types of work. Issues can be assigned to team members, labeled, and linked to pull requests.<br>
    6.Collaboration:<br>
    GitHub enables collaboration by allowing multiple users to work on the same repository, comment on code, review pull requests, and discuss issues. It supports various collaboration workflows and integrates with many tools and services<br>
    7.Actions and CI/CD:<br>
    GitHub Actions is a feature that allows you to automate workflows directly in your GitHub repository. It can be used for continuous integration and continuous deployment (CI/CD), testing, and other automated tasks.<br>`
    document.getElementById('demo').innerHTML = feature
}

const about = () =>{
    let about = `This is not the git hub website. It was olny created to to help you learn more about git hub and use it better`
    document.getElementById('aboutWebsite').innerHTML = about
}
