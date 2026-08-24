import { handleUiEvent } from "./events.js";

async function main() {
  try {
    await handleUiEvent({
      type: "click",
      x: 100,
      y: 200,
    });

    await handleUiEvent({
      type: "submit",
      formId: "loginForm",
      values: {
        username: "Mariz",
        password: "12345",
      },
    });

    await handleUiEvent({
      type: "error",
      message: "Something went wrong.",
    });

    await handleUiEvent({
      type: "submit",
      formId: "registerForm",
      values: {
        username: "",
        password: "12345",
      },
    });
  } catch (error) {
    console.error(
      "Handler failed:",
      error instanceof Error ? error.message : error
    );
  }
}

main();