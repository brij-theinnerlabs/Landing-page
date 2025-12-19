import { Card } from "@/components/ui/card"

export function DashboardMock() {
  return (
    <Card className="w-full max-w-lg overflow-hidden border border-black/10 bg-white shadow-lg">
      <div className="border-b border-black/10">
        <div className="flex gap-1 p-4">
          <button className="rounded-md bg-[#F0E0E6] px-4 py-2 text-sm font-medium text-black">Visibility</button>
          <button className="rounded-md px-4 py-2 text-sm font-medium text-[#6B6B6B] hover:bg-gray-50">Citations</button>
          <button className="rounded-md px-4 py-2 text-sm font-medium text-[#6B6B6B] hover:bg-gray-50">Answers</button>
        </div>
      </div>
      <div className="space-y-6 p-6">
        {/* Mini chart */}
        <div className="h-32 rounded-lg bg-[#DCE8F3]/30" />

        {/* KPI Chips */}
        <div className="flex flex-wrap gap-2">
          <div className="rounded-full bg-[#F0E0E6] px-4 py-2 text-xs font-medium text-black">
            Share of Answers <span className="font-bold">42%</span>
          </div>
          <div className="rounded-full bg-[#DCE8F3] px-4 py-2 text-xs font-medium text-black">
            Citations <span className="font-bold">128</span>
          </div>
          <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black">
            Sentiment <span className="font-bold">Positive</span>
          </div>
        </div>

        {/* Mini Table */}
        <div className="overflow-hidden rounded-lg border border-black/10">
          <table className="w-full text-xs">
            <thead className="bg-[#F0E0E6]/50">
              <tr>
                <th className="p-2 text-left font-medium text-black">Prompt</th>
                <th className="p-2 text-center font-medium text-black">You</th>
                <th className="p-2 text-center font-medium text-black">Competitor</th>
                <th className="p-2 text-center font-medium text-black">Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-black/10">
                <td className="p-2 text-black">Best analytics tool</td>
                <td className="p-2 text-center font-medium text-black">#2</td>
                <td className="p-2 text-center text-[#6B6B6B]">#4</td>
                <td className="p-2 text-center font-bold text-green-600">+2</td>
              </tr>
              <tr className="border-t border-black/10">
                <td className="p-2 text-black">AI tracking software</td>
                <td className="p-2 text-center font-medium text-black">#1</td>
                <td className="p-2 text-center text-[#6B6B6B]">#3</td>
                <td className="p-2 text-center font-bold text-green-600">+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

