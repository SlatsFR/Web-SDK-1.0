import { FRPolicy, PolicyRequirement } from '@forgerock/javascript-sdk';
import { el } from '../../util/dom';

/**
 * Returns a UL element containing an LI for each policy failure message.
 *
 * @param failedPolicies The policy requirements that failed validation
 * @param property The object property name the policy applies to
 */
function renderErrors(
  failedPolicies: PolicyRequirement[],
  property: string,
): HTMLUListElement | undefined {
  if (!failedPolicies || failedPolicies.length === 0) {
    return undefined;
  }

  const messages = failedPolicies.map((x) => {
    return FRPolicy.parsePolicyRequirement(property, x);
  });

  const list = el<HTMLUListElement>('ul', 'fr-error');
  messages.forEach((x) => {
    const item = el('li');
    item.innerHTML = x;
    list.appendChild(item);
  });

  return list;
}

export { renderErrors };
