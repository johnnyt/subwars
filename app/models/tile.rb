class Tile
  include MagModel

  attr_reader :geohash, :color

  def initialize(attributes={})
    @geohash = attributes[:geohash]
    @color = self.class.random_color
  end

  private

  def self.random_color
    %w[ red blue green ][rand(3)]
  end
end
