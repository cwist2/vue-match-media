import { inject, InjectionKey } from 'vue';

const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

const PolySymbol = (name: string) =>
  hasSymbol
    ? Symbol(name)
    : name

export const matchMediaKey = /*#__PURE__*/ PolySymbol(
  'mm'
) as InjectionKey<Record<string, boolean>>

export function useMatchMedia(): Record<string, boolean> {
  return inject(matchMediaKey)!
}
