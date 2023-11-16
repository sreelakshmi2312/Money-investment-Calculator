// UserInput.js

import React from "react";

function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput(
                "initialInvestment",
                parseInt(event.target.value, 10),
              )
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput(
                "annualInvestment",
                parseInt(event.target.value, 10),
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", parseInt(event.target.value, 10))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChangeInput("duration", parseInt(event.target.value, 10))
            }
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
