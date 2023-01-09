const simpleGit = require('simple-git');
simpleGit().clean(simpleGit.CleanOptions.FORCE);
simpleGit().clone("https://github.com/fortmea/tech-dev-artigos.git", "src/posts")