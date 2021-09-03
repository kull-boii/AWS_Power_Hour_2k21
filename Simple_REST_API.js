// paste it in index.js file of your lambda function

var json = {
  service: "lambda",
  reference: "https://aws.amazon.com/lambda/faqs/",
  questions: [
    {
      q: "Is AWS Lambda Serverless?",
      a: "yes it is",
    },

    {
      q: "Can you run containers on AWS Lambda?",
      a: "yes iyou can",
    },

    {
      q: "Do you need to manage infrastructure for AWS Lambda?",
      a: "No, AWS does that for you, just focus on your application code",
    },
  ],
};

exports.handler = async (event) => {
  var rand = Math.floor(Math.random() * json.questions.length);
  // selects a random no between 0 to no of questions

  const response = {
    statusCode: 200,
    // displays one of the question and answer according to the random number generated
    body: JSON.stringify(json.questions[rand]),
  };

  console.log(`\n\n response : ${response["body"]}\n\n`);

  return response;
};
