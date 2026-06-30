import { Download, FileText } from "lucide-react";
import { getProductDeliverable } from "@/lib/sanity";

type ProductDeliverableProps = {
  product: "propx" | "propcare";
};

export default async function ProductDeliverable({
  product,
}: ProductDeliverableProps) {
  const deliverable = await getProductDeliverable(product);

  if (!deliverable) {
    return null;
  }

  const previewUrl = `${deliverable.document.url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <section className="w-full px-6 pb-24 md:px-15">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-sm text-gray-500 font-sans font-medium">
            {deliverable.eyebrow}
          </p>
          <h2 className="text-4xl text-black items-center justify-center font-serif font-bold">
            {deliverable.heading}
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] md:gap-20">
          <div className="flex max-w-2xl flex-col items-start">
            <h3 className="text-3xl font-bold leading-tight tracking-tight text-black">
              {deliverable.documentTitle}
            </h3>
            <p className="mt-7 text-md leading-8 text-neutral-600 md:text-lg">
              {deliverable.description}
            </p>
            <a
              href={deliverable.document.url}
              download={deliverable.document.filename}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit gap-2 text-lg font-sans font-medium items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-800 transition-colors duration-300 hover:bg-brand-700 hover:scale-105 transition-transform duration-600"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              {deliverable.buttonLabel}
            </a>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-lg border border-black/25 shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:min-h-[520px]">
            <FileText className="absolute h-16 w-16" aria-hidden="true" />
            <iframe
              src={previewUrl}
              title={`${deliverable.documentTitle} preview`}
              className="relative h-full min-h-[420px] w-full bg-neutral-100 md:min-h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
