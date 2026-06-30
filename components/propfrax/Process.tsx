const processSteps = [
  {
    title: "Understand Your Goals",
    description:
      "We begin by understanding your investment objectives, budget, timeline, and risk appetite to shape a strategy aligned with your financial goals.",
  },
  {
    title: "Market & Opportunity Analysis",
    description:
      "Our team evaluates market trends, location potential, and asset performance to identify opportunities with strong investment potential.",
  },
  {
    title: "Property Shortlisting",
    description:
      "Based on your requirements, we curate a selection of properties that match your investment strategy and long term objectives.",
  },
  {
    title: "Investment Evaluation",
    description:
      "Each shortlisted asset is assessed through financial analysis, risk evaluation, and return projections to support informed decision making.",
  },
  {
    title: "Ongoing Portfolio Guidance",
    description:
      "Our support continues beyond acquisition with portfolio reviews, performance monitoring, and strategic guidance as your investments grow.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works"
      aria-labelledby="propfrax-process-heading"
      className="w-full bg-white px-6 py-16 font-sans md:px-15"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="font-sans text-sm font-medium text-gray-500">
            HOW IT WORKS
          </p>
          <h2
            id="propfrax-process-heading"
            className="mb-8 pt-2 font-serif text-4xl font-bold text-black"
          >
            Our Investment Process
          </h2>
        </div>

        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="grid min-h-34 grid-cols-[7rem_1fr] items-end border-b border-black/25 md:min-h-36 md:grid-cols-[15rem_1fr] group"
          >
            <span
              aria-hidden="true"
              className="translate-y-3 pl-4 font-serif text-7xl leading-none italic tracking-tight text-black/45 md:translate-y-4 md:pl-6 md:text-9xl group-hover:translate-y-5 transition-transform duration-300"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="self-center py-6 md:py-7 group-hover:translate-y-[-2px] transition-transform duration-300">
              <h3 className="text-lg font-semibold tracking-tight text-black md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-gray-500 md:text-sm group-hover:text-gray-600 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
