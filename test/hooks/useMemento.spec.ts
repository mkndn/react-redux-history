import { describe, expect, it } from "vitest"
import { useMemento } from "@/hooks/useMemento"
import { act, renderHook } from "@testing-library/react"

describe("useMemento", () => {
  it("Should record history of count", () => {
    const { result } = renderHook(() => useMemento(0))

    act(() => {
      result.current[1](1)
      result.current[1](2)
      result.current[1](3)
    })

    expect(result.current[0]).toBe(3)

    /*undo()
    expect(count).toBe(2)
    undo()
    expect(count).toBe(1)

    redo()
    expect(count).toBe(2)
    redo()
    expect(count).toBe(3)*/
  })
})
