class Player
  include MagModel

  attr_accessor :current_tile
  attr_reader :explored_tiles

  public

  def initialize(attributes={})
    @current_tile = attributes[:current_tile]
    @explored_tiles = []
  end
end
