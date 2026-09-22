import React from 'react';

export default function RulesSection() {
  const rules = [
    {
      id: "01",
      title: "Tennis Ball",
      desc: "This tournament will be played with a tennis ball."
    },
    {
      id: "02",
      title: "New Ball",
      desc: "Each inning will start with a new ball."
    },
    {
      id: "03",
      title: "Knockout Matches",
      desc: "Knockout matches will be of 6 overs."
    },
    {
      id: "04",
      title: "Semi Final & Final",
      desc: "Semi Final will be 8 overs and Final will be 10 overs a side."
    },
    {
      id: "05",
      title: "Umpire's Decision",
      desc: "On-field umpire's decision will be the final one."
    },
    {
      id: "06",
      title: "LBW & Leg Byes",
      desc: "LBW and Leg byes are not applicable for this tournament."
    },
    {
      id: "07",
      title: "Team Eligibility",
      desc: "A player who has played in one team cannot play in another team."
    },
    {
      id: "08",
      title: "Chucking",
      desc: "Chucking is strictly not allowed."
    },
    {
      id: "09",
      title: "Documents",
      desc: "All players must produce School ID and Aadhaar card at registration."
    },
    {
      id: "10",
      title: "Uniform",
      desc: "All players in the team need to wear the same colour sports uniform."
    },
    {
      id: "11",
      title: "Organizer Rights",
      desc: "Organizer has full right to change match rules according to situation."
    }
  ];

  return (
    <section className="section rules-section" id="rules">
      <div className="container-custom">
        
        <div className="section-heading center">
          <span className="section-label">
            FAIR PLAY
          </span>

          <h2>
            RULES & <span>REGULATIONS</span>
          </h2>

          <p>
            Fair play for a better tomorrow.
          </p>
        </div>

        <div className="rules-grid">
          {rules.map((rule) => (
            <div className="rule" key={rule.id}>
              <span className="rule-number">
                {rule.id}
              </span>

              <div>
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
