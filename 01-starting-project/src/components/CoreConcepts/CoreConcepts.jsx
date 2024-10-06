import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(params) {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
