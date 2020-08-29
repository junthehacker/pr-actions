const core                                  = require('@actions/core');
const {getPullRequestAssociatedWithContext} = require('./utilities/github');

async function main() {
    console.log(`GitHub PR information ${JSON.stringify(await getPullRequestAssociatedWithContext(), undefined, 2)}`);
}

main().catch(e => core.setFailed(e));
