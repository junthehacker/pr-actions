const core              = require('@actions/core');
const {GitHub, context} = require('@actions/github');

module.exports = {

    getPullRequestAssociatedWithContext: async function () {
        const token = core.getInput('github-token', {required: true});
        const sha   = core.getInput('sha');

        const client = new GitHub(token, {});

        const result = await client.repos.listPullRequestsAssociatedWithCommit({
            owner: context.repo.owner,
            repo: context.repo.repo,
            commit_sha: sha || context.sha,
        });

        const pr = result.data.length > 0 && result.data[0];

        if (pr) {
            return {
                number: pr.number,
                title: pr.title,
                body: pr.body,
            };
        } else {
            return null;
        }

    }

}

