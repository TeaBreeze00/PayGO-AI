**payGO AI: Bringing AI to your doorsteps**  

**Overview:**  
payGO AI is a cutting-edge platform that brings the power of multiple AI models—including Gemini, ChatGPT, DeepSeek, and more—under one seamless service. Designed for flexibility and efficiency, payGO AI allows users to access premium and enterprise versions of top AI models on a pay-as-you-go basis. Whether you're an individual user, a developer, or a business, payGO AI eliminates the need for multiple subscriptions while ensuring you always have access to the best AI tools available.  

**Key Features:**  

1. **Multi-Model Access:**  
   - Choose from a diverse range of AI models, each optimized for different use cases—whether it's natural language processing, code generation, image creation, or complex problem-solving.  
   - Compare model outputs in real-time to find the best solution for your needs.  

2. **Flexible Pay-as-You-Go Pricing:**  
   - No need for expensive subscriptions—pay only for what you use.  
   - Transparent pricing ensures you always know the cost before making a request.  
   - Cost-efficient for both casual users and enterprise-scale applications.  

3. **Seamless API & Web Interface:**  
   - Easily integrate AI capabilities into your applications with our robust API.  
   - Use the intuitive web interface to interact with AI models directly—no coding required.  
   - Track usage, manage billing, and customize access preferences with ease.  

4. **Enterprise-Grade Performance & Security:**  
   - Get access to enterprise versions of top AI models, ensuring higher rate limits, priority processing, and advanced features.  
   - Secure data handling with encryption and compliance with industry standards.  

5. **Dynamic AI Selection & Optimization:**  
   - AI model routing optimizes your queries based on cost, performance, and accuracy.  
   - Custom recommendations help you select the best model for specific tasks.  
   - Future-proofed with continuous AI model updates and new integrations.  

payGO AI is the ultimate AI utility—giving you the freedom to access premium AI models without commitment, at the best price, and with full control over your usage. Whether you're an AI enthusiast, a business looking for scalable solutions, or a developer integrating AI into applications, payGO AI provides the power of choice with unmatched flexibility.

## Configuring your environment

To start using this project, you need to get your development environment configured so that you can build and execute the code.
To do this, follow these steps; the specifics of each step will vary based on your operating system:

1. [Install git](https://git-scm.com/downloads) (v2.X). You should be able to execute `git --version` on the command line after installation is complete.

1. [Install Node LTS](https://nodejs.org/en/download/) (LTS: v18.X), which will also install NPM (you should be able to execute `node --version` and `npm --version` on the command line).

1. [Install Yarn](https://yarnpkg.com/en/docs/install) (1.22.X). You should be able to execute `yarn --version`.

1. Clone your repository by running `git clone REPO_URL` from the command line. You can get the REPO_URL by clicking on the green button on your project repository page on GitHub. Note that due to new department changes you can no longer access private git resources using https and a username and password. You will need to use either [an access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) or [SSH](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

## Project commands

Once your environment is configured you need to further prepare the project's tooling and dependencies.
In the project folder:

1. `yarn install` to download the packages specified in your project's *package.json* to the *node_modules* directory.

1. `yarn build` to compile your project. You must run this command after making changes to your TypeScript files. If it does not build locally, AutoTest will not be able to build it. This will also run formatting and linting, so make sure to fix those errors too!

1. `yarn test` to run the test suite.
    - To run with coverage, run `yarn cover`

1. `yarn prettier:fix` to format your project code.

1. `yarn lint:check` to see lint errors in your project code. You may be able to fix some of them using the `yarn lint:fix` command.


If you are curious, some of these commands are actually shortcuts defined in [package.json -> scripts](./package.json).

## Running and testing from an IDE

IntelliJ Ultimate should be automatically configured the first time you open the project (IntelliJ Ultimate is a free download through the [JetBrains student program](https://www.jetbrains.com/community/education/#students/)).

### License

While the readings for this course are licensed using [CC-by-SA](https://creativecommons.org/licenses/by-sa/3.0/), **checkpoint descriptions and implementations are considered private materials**. Please do not post or share your project solutions. We go to considerable lengths to make the project an interesting and useful learning experience for this course. This is a great deal of work, and while future students may be tempted by your solutions, posting them does not do them any real favours. Please be considerate with these private materials and not pass them along to others, make your repos public, or post them to other sites online.
