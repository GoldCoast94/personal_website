import React from 'react';

interface Props {
  className?: string;
}

export default function 解答05({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 解答5</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

// Plugin interface
type Plugin interface {
    Name() string
    Version() string
    Execute(data interface{}) error
}

// LoggerPlugin
type LoggerPlugin struct {
    enabled bool
}

func (l LoggerPlugin) Name() string {
    return "Logger"
}

func (l LoggerPlugin) Version() string {
    return "1.0.0"
}

func (l LoggerPlugin) Execute(data interface{}) error {
    fmt.Printf("[%s] %v - %s\n", time.Now().Format("15:04:05"), l.Name(), data)
    return nil
}

// CachePlugin
type CachePlugin struct {
    cache map[string]interface{}
}

func NewCachePlugin() *CachePlugin {
    return &CachePlugin{
        cache: make(map[string]interface{}),
    }
}

func (c CachePlugin) Name() string {
    return "Cache"
}

func (c CachePlugin) Version() string {
    return "1.0.0"
}

func (c *CachePlugin) Execute(data interface{}) error {
    key := fmt.Sprintf("%v", data)
    c.cache[key] = data
    fmt.Printf("[%s] Cached: %v\n", c.Name(), key)
    return nil
}

// MetricsPlugin
type MetricsPlugin struct {
    count int
}

func (m *MetricsPlugin) Name() string {
    return "Metrics"
}

func (m *MetricsPlugin) Version() string {
    return "1.0.0"
}

func (m *MetricsPlugin) Execute(data interface{}) error {
    m.count++
    fmt.Printf("[%s] Total executions: %d\n", m.Name(), m.count)
    return nil
}

// PluginManager
type PluginManager struct {
    plugins map[string]Plugin
    enabled map[string]bool
}

func NewPluginManager() *PluginManager {
    return &PluginManager{
        plugins: make(map[string]Plugin),
        enabled: make(map[string]bool),
    }
}

func (pm *PluginManager) Register(plugin Plugin) {
    pm.plugins[plugin.Name()] = plugin
    pm.enabled[plugin.Name()] = true
    fmt.Printf("Registered plugin: %s v%s\n", plugin.Name(), plugin.Version())
}

func (pm *PluginManager) Enable(name string) error {
    if _, ok := pm.plugins[name]; !ok {
        return fmt.Errorf("plugin not found: %s", name)
    }
    pm.enabled[name] = true
    fmt.Printf("Enabled plugin: %s\n", name)
    return nil
}

func (pm *PluginManager) Disable(name string) error {
    if _, ok := pm.plugins[name]; !ok {
        return fmt.Errorf("plugin not found: %s", name)
    }
    pm.enabled[name] = false
    fmt.Printf("Disabled plugin: %s\n", name)
    return nil
}

func (pm *PluginManager) Execute(data interface{}) {
    for name, plugin := range pm.plugins {
        if pm.enabled[name] {
            plugin.Execute(data)
        }
    }
}

func (pm *PluginManager) ListPlugins() {
    fmt.Println("\n=== Registered Plugins ===")
    for name, plugin := range pm.plugins {
        status := "disabled"
        if pm.enabled[name] {
            status = "enabled"
        }
        fmt.Printf("- %s v%s [%s]\n", plugin.Name(), plugin.Version(), status)
    }
}

func main() {
    manager := NewPluginManager()

    // Register plugins
    manager.Register(LoggerPlugin{})
    manager.Register(NewCachePlugin())
    manager.Register(&MetricsPlugin{})

    // List plugins
    manager.ListPlugins()

    // Execute plugins
    fmt.Println("\n=== Executing with all plugins ===")
    manager.Execute("Hello, Plugins!")

    // Disable Logger
    fmt.Println()
    manager.Disable("Logger")

    // Execute again
    fmt.Println("\n=== Executing without Logger ===")
    manager.Execute("Second execution")

    // Re-enable Logger
    fmt.Println()
    manager.Enable("Logger")

    fmt.Println("\n=== Executing with Logger enabled ===")
    manager.Execute("Third execution")

    // List final state
    manager.ListPlugins()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答5',
  section: '0'
};
