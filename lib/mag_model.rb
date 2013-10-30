module MagModel
  def self.included(base)
    base.extend ClassMethods
    base.extend Enumerable
    base.include InstanceMethods
  end

  module ClassMethods
    def store
      @store ||= []
    end

    def each
      store.each{ |el| yield el }
    end
  end

  module InstanceMethods
    # This will stage the instance - it won't be commited until the request has completed
    def save
      self.class.store.push(self)
    end

    def save!
      Maglev.persistent do
        Maglev.abort_transaction
        save
        Maglev.commit_transaction
      end
    end
  end
end
