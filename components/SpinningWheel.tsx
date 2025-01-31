import { useState, useEffect } from "react"

interface SpinningWheelProps {
  isSpinning: boolean
}

const SpinningWheel: React.FC<SpinningWheelProps> = ({ isSpinning }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 10) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isSpinning])

  return (
    <div className="relative w-64 h-64">
      <div
        className="absolute inset-0 border-8 border-gray-300 rounded-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.05s linear",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <div className="w-1 h-1/2 bg-gray-500 mx-auto" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-red-500 rounded-full" />
      </div>
    </div>
  )
}

export default SpinningWheel

