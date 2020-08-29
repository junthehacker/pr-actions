const core                                  = require('@actions/core');
const {getPullRequestAssociatedWithContext} = require('./utilities/github');

async function main() {
    const pullRequest = await getPullRequestAssociatedWithContext();
    if (!pullRequest) {
       console.log(`Push is not associated with a pull request, skipping check.`);
    }
    console.log(`GitHub PR information ${JSON.stringify(await getPullRequestAssociatedWithContext(), undefined, 2)}`);
}

main().catch(e => core.setFailed(e));
