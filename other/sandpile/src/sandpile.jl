using Images

# Constants
const COLORS = [[(0.0000, 0.0353, 0.5098), (0.2941, 0.8314, 1.0000), (0.9882, 0.8941, 0.0000), (0.4745, 0.0157, 0.0000)],
                [(0.1686, 0.9059, 0.9882), (0.1451, 0.4980, 0.9608), (0.1176, 0.0392, 0.6314), (0.0471, 0.0078, 0.3020)],
                [(0.9804, 0.0863, 0.9373), (0.7490, 0.0941, 0.9490), (0.2824, 0.0314, 0.6314), (0.0471, 0.0078, 0.3020)]]
const board_sizes     = [50]
const pixels_per_node = [2]

# Stabilizer
function stab(board)
    height, width = size(board)
    is_stable = false
    while !is_stable
        is_stable = true
        for j in 2:width-1
            for i in 2:height-1
                if board[i,j] >= 4
                    is_stable = false
                    board[i,j] -= 4
                    board[i+1,j] += 1
                    board[i-1,j] += 1
                    board[i,j+1] += 1
                    board[i,j-1] += 1
                end
            end
        end
    end
    board
end

# Returns the identity board with 1 extra row/column on each side to handle boundary cases
function board_identity(height, width)
    identity = stab(fill(6, height+2, width+2) - stab(fill(6, height+2, width+2)))
end

# Takes board and image parameters, generates image
function generate_image(board::Array, pixels_per_node, color_scheme, color_label)
    graph_width, graph_height = size(board)[1]-2, size(board)[2]-2
    image_width = graph_width*pixels_per_node
    image_height = graph_height*pixels_per_node

    IMAGE = fill(RGB(0.0,0.0,0.0), (image_width, image_height))
    for i in 1:image_width
        for j in 1:image_height
            value_at_pixel = board[cld(i,pixels_per_node)+1,cld(j,pixels_per_node)+1]+1
            color = color_scheme[value_at_pixel]
            IMAGE[i,j] = RGB(color[1], color[2], color[3])
        end
    end
    save(string("Images/id_", graph_width, "_x", pixels_per_node, "_color_", color_label, ".png"), IMAGE)
end

# Finds all the final boards
results = []
for s in board_sizes
    print("Stabilizing board of size ", s, "...")
    @time push!(results, board_identity(s, s))
end

# Creates images for all the final boards
for r in eachindex(results)
    print("Generating images of size ", size(results[r])[1]-2, " by ", size(results[r])[2]-2, "...")
    for c in eachindex(COLORS)
        @time generate_image(results[r], pixels_per_node[r], COLORS[c], c)
    end
end

print("All tasks complete.")