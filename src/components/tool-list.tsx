import { Tool } from '../data/tools';

interface ToolListProps {
  tools: Tool[];
  onSelectTool: (toolId: string) => void;
}

export function ToolList({ tools, onSelectTool }: ToolListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onSelectTool(tool.id)}
          className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden text-left h-full flex flex-col"
        >
          <div className="px-5 py-4 flex-1 flex flex-col">
            <div className="flex items-start flex-1">
              <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-100">
                <tool.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
} 