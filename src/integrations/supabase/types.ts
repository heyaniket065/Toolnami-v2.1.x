export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      ai_conversations: {
        Row: {
          created_at: string;
          id: string;
          model: string;
          provider: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          model?: string;
          provider?: string;
          title?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          model?: string;
          provider?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      ai_messages: {
        Row: {
          content: string;
          conversation_id: string;
          created_at: string;
          id: string;
          model: string | null;
          role: string;
          user_id: string;
        };
        Insert: {
          content?: string;
          conversation_id: string;
          created_at?: string;
          id?: string;
          model?: string | null;
          role: string;
          user_id: string;
        };
        Update: {
          content?: string;
          conversation_id?: string;
          created_at?: string;
          id?: string;
          model?: string | null;
          role?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ai_messages_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "ai_conversations";
            referencedColumns: ["id"];
          },
        ];
      };
      ai_preferences: {
        Row: {
          created_at: string;
          id: string;
          notifications_enabled: boolean;
          preferred_model: string | null;
          preferred_provider: string | null;
          theme: string;
          updated_at: string;
          user_id: string;
          voice_enabled: boolean;
        };
        Insert: {
          created_at?: string;
          id?: string;
          notifications_enabled?: boolean;
          preferred_model?: string | null;
          preferred_provider?: string | null;
          theme?: string;
          updated_at?: string;
          user_id: string;
          voice_enabled?: boolean;
        };
        Update: {
          created_at?: string;
          id?: string;
          notifications_enabled?: boolean;
          preferred_model?: string | null;
          preferred_provider?: string | null;
          theme?: string;
          updated_at?: string;
          user_id?: string;
          voice_enabled?: boolean;
        };
        Relationships: [];
      };
      ai_profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          display_name: string | null;
          email: string | null;
          id: string;
          provider: string | null;
          status: Database["public"]["Enums"]["ai_access_status"];
          updated_at: string;
          user_id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: string;
          provider?: string | null;
          status?: Database["public"]["Enums"]["ai_access_status"];
          updated_at?: string;
          user_id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: string;
          provider?: string | null;
          status?: Database["public"]["Enums"]["ai_access_status"];
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      ai_saved_items: {
        Row: {
          content: string | null;
          conversation_id: string | null;
          created_at: string;
          id: string;
          message_id: string | null;
          title: string | null;
          user_id: string;
        };
        Insert: {
          content?: string | null;
          conversation_id?: string | null;
          created_at?: string;
          id?: string;
          message_id?: string | null;
          title?: string | null;
          user_id: string;
        };
        Update: {
          content?: string | null;
          conversation_id?: string | null;
          created_at?: string;
          id?: string;
          message_id?: string | null;
          title?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ai_saved_items_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "ai_conversations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ai_saved_items_message_id_fkey";
            columns: ["message_id"];
            isOneToOne: false;
            referencedRelation: "ai_messages";
            referencedColumns: ["id"];
          },
        ];
      };
      ai_usage: {
        Row: {
          conversation_id: string | null;
          created_at: string;
          id: string;
          input_tokens: number | null;
          model: string | null;
          output_tokens: number | null;
          provider: string | null;
          request_status: string;
          total_tokens: number | null;
          user_id: string;
        };
        Insert: {
          conversation_id?: string | null;
          created_at?: string;
          id?: string;
          input_tokens?: number | null;
          model?: string | null;
          output_tokens?: number | null;
          provider?: string | null;
          request_status?: string;
          total_tokens?: number | null;
          user_id: string;
        };
        Update: {
          conversation_id?: string | null;
          created_at?: string;
          id?: string;
          input_tokens?: number | null;
          model?: string | null;
          output_tokens?: number | null;
          provider?: string | null;
          request_status?: string;
          total_tokens?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ai_usage_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "ai_conversations";
            referencedColumns: ["id"];
          },
        ];
      };
      ai_user_roles: {
        Row: {
          created_at: string;
          id: string;
          role: Database["public"]["Enums"]["ai_app_role"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          role: Database["public"]["Enums"]["ai_app_role"];
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: Database["public"]["Enums"]["ai_app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          message: string;
          name: string;
          notified: boolean;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          message: string;
          name: string;
          notified?: boolean;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          message?: string;
          name?: string;
          notified?: boolean;
        };
        Relationships: [];
      };
      favorite_tools: {
        Row: {
          created_at: string;
          id: string;
          tool_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          tool_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          tool_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "favorite_tools_tool_id_fkey";
            columns: ["tool_id"];
            isOneToOne: false;
            referencedRelation: "tools";
            referencedColumns: ["id"];
          },
        ];
      };
      newsletter_subscribers: {
        Row: {
          created_at: string;
          email: string;
          id: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
        };
        Relationships: [];
      };
      page_content: {
        Row: {
          content: string | null;
          id: string;
          page_name: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          content?: string | null;
          id?: string;
          page_name: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          content?: string | null;
          id?: string;
          page_name?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          display_name: string | null;
          id: string;
          theme_preference: string;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          id: string;
          theme_preference?: string;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          id?: string;
          theme_preference?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      tool_categories: {
        Row: {
          created_at: string;
          description: string | null;
          icon: string | null;
          id: string;
          name: string;
          slug: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          icon?: string | null;
          id?: string;
          name: string;
          slug: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          icon?: string | null;
          id?: string;
          name?: string;
          slug?: string;
        };
        Relationships: [];
      };
      tools: {
        Row: {
          category_id: string | null;
          created_at: string;
          description: string | null;
          featured: boolean;
          id: string;
          slug: string;
          status: string;
          thumbnail_url: string | null;
          title: string;
          updated_at: string;
          views: number;
        };
        Insert: {
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          featured?: boolean;
          id?: string;
          slug: string;
          status?: string;
          thumbnail_url?: string | null;
          title: string;
          updated_at?: string;
          views?: number;
        };
        Update: {
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          featured?: boolean;
          id?: string;
          slug?: string;
          status?: string;
          thumbnail_url?: string | null;
          title?: string;
          updated_at?: string;
          views?: number;
        };
        Relationships: [
          {
            foreignKeyName: "tools_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "tool_categories";
            referencedColumns: ["id"];
          },
        ];
      };
      website_settings: {
        Row: {
          created_at: string;
          id: string;
          logo_url: string | null;
          site_name: string;
          support_email: string;
          theme_settings: Json;
        };
        Insert: {
          created_at?: string;
          id?: string;
          logo_url?: string | null;
          site_name?: string;
          support_email?: string;
          theme_settings?: Json;
        };
        Update: {
          created_at?: string;
          id?: string;
          logo_url?: string | null;
          site_name?: string;
          support_email?: string;
          theme_settings?: Json;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      ai_has_role: {
        Args: {
          _role: Database["public"]["Enums"]["ai_app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
      ai_is_approved: { Args: { _user_id: string }; Returns: boolean };
    };
    Enums: {
      ai_access_status: "pending" | "approved" | "blocked";
      ai_app_role: "admin" | "member";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      ai_access_status: ["pending", "approved", "blocked"],
      ai_app_role: ["admin", "member"],
    },
  },
} as const;
