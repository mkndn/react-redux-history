import { describe, expect, it } from "vitest"
import { useMemento } from "@/hooks/useMemento"
import { act, renderHook } from "@testing-library/react"

describe("useMemento", () => {
  it("Should record history of count", () => {
    const { result } = renderHook(() => useMemento(0))

    act(() => {
      const [count, setCount, { undo, redo }] = result.current

      setCount(1)
      setCount(2)
      setCount(3)

      expect(count).toBe(3)

      undo()
      expect(count).toBe(2)
      undo()
      expect(count).toBe(1)

      redo()
      expect(count).toBe(2)
      redo()
      expect(count).toBe(3)
    })
  })
})
